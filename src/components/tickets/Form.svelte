<script lang="ts">
	import { loadScript, type PayPalNamespace } from '@paypal/paypal-js';
	import env from '$lib/env.json';
	import { API } from '$lib/calls/api';
	import { t, locale } from '$lib/i18n/i18n';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { sendConfirmation } from '$lib';

	let checkboxIcon: HTMLElement;
	let checkboxDiretction = 1;
	let checkboxAnimation: any;
	let dinneIcon: HTMLElement;
	let dinnerDirection = 1;
	let dinnerAnimation: any;
	let error: string = $state('');
	let paypalError: string = $state('');
	let name: string = $state('');
	let email: string = $state('');
	let institution: string = $state('');
	let tiNumber: string = $state('');
	let isLoading: boolean = $state(false);
	let success: boolean = $state(false);
	let paymentId: string = '';
	let activeId: number = $state(1);
	let activeName: string = $state('');
	let modalBankTransfer: boolean = $state(false);
	let fromBank: boolean = $state(false);

	let options = [
		{
			name: 'tickets.standard',
			list: [
				{
					id: 1,
					name: 'tickets.non-ti-member',
					value: 800
				},
				{
					id: 2,
					name: 'tickets.ti-member',
					value: 660
				}
			]
		},
		{
			name: 'tickets.early',
			list: [
				{
					id: 3,
					name: 'tickets.non-ti-member',
					value: 660
				},
				{
					id: 4,
					name: 'tickets.ti-member',
					value: 515
				}
			]
		},
		{
			name: 'tickets.other',
			list: [
				{
					id: 5,
					name: 'tickets.ti-rep',
					value: 480
				},
				{
					id: 6,
					name: 'tickets.student',
					value: 240
				},
				{
					id: 7,
					name: 'tickets.day',
					value: 300
				},
				{
					id: 8,
					name: 'tickets.acmop',
					value: 240
				}
			]
		}
	];

	const getValueById = (id: number) => {
		for (const group of options) {
			const item = group.list.find((entry) => entry.id === id);
			if (item) return item.value;
		}
		return null;
	};

	const handleClickCheckbox = () => {
		checkboxIcon.click();
	};

	const handleClickDinner = () => {
		dinneIcon.click();
	};

	const selectFee = (id: number, fee: string, name: string) => {
		activeId = id;
		activeName = `${$t(fee)} - ${$t(name)}`;
	};

	const actSuccess = () => {
		if (!fromBank) {
			API.setPaymentTrue(paymentId);
		}

		success = true;
		sendConfirmation(
			name,
			email,
			$t('tickets.buy.success.email') +
				(fromBank
					? `<br/><br/>ID: ${paymentId}, <br/>IBAN: PT50.0033.0000.00000125519.05<br/>SWIFT/BIC: BCOMPTPL<br/>Value - ` +
						getValueById(activeId) +
						'€'
					: ''),
			$locale.toUpperCase() === 'PT' ? 'PT' : 'EN'
		);

		if (fromBank) {
			sendConfirmation(
				name,
				'bookings.tiwc25@aquitex.pt',
				`Uma nova compra foi feita por transferência bancária. <br/><br/> Com o nome: ${name} <br /> Email: ${email} <br /> Instituição: ${institution} <br /> Número de membro TI: ${tiNumber} <br /> Opção selecionada: ${activeName}<br/><br/>. ID: ${paymentId}<br />Valor: ` +
					getValueById(activeId) +
					'€',
				$locale.toUpperCase() === 'PT' ? 'PT' : 'EN',
				true
			);
		} else {
			sendConfirmation(
				name,
				'bookings.tiwc25@aquitex.pt',
				`Uma nova compra foi feita por PayPal. <br/><br/> Com o nome: ${name} <br /> Email: ${email} <br /> Instituição: ${institution} <br /> Número de membro TI: ${tiNumber} <br /> Opção selecionada: ${activeName}<br/><br/>. ID: ${paymentId}<br />Valor: ` +
					getValueById(activeId) +
					'€',
				$locale.toUpperCase() === 'PT' ? 'PT' : 'EN',
				true
			);
		}
	};

	const submitForm = async (): Promise<boolean> => {
		success = false;

		error = '';

		if (!name) {
			error = 'contacts.errors.name';
			return false;
		}

		if (!email) {
			error = 'contacts.errors.email';
			return false;
		}
		if (checkboxDiretction === 1) {
			error = 'contacts.errors.checkboxDiretction';
			return false;
		}

		isLoading = true;
		paymentId = 'id' + Math.random().toString(16).slice(2);
		await API.createPayment(
			name,
			email,
			institution,
			dinnerDirection !== 1,
			paymentId,
			tiNumber,
			activeName,
			fromBank ? 'Transferência Bancária' : 'Paypal'
		);
		return true;
	};

	const payByBankTransfer = async () => {
		const formIsValid = await submitForm();
		if (!formIsValid) {
			// Reject the promise to prevent order creation
			return Promise.reject(new Error('Form validation failed'));
		}
		fromBank = true;
		isLoading = true;
		actSuccess();
		modalBankTransfer = true;
	};

	onMount(() => {
		setTimeout(() => {
			loadScript({ clientId: env.PAYPAL_ClIENT_ID, currency: 'EUR' }).then(
				(paypal: PayPalNamespace | null) => {
					if (paypal) {
						paypal!.Buttons!({
							style: {
								color: 'blue',
								shape: 'pill'
							},
							createOrder: async (data, actions) => {
								/* const formIsValid = await submitForm();
								if (!formIsValid) {
									// Reject the promise to prevent order creation
									return Promise.reject(new Error('Form validation failed'));
								} */

								let eurValue: number = 0;

								options.forEach((item) => {
									const it = item.list.find((it) => it.id === activeId);
									if (it) {
										eurValue = it.value;
									}
								});

								return actions.order.create({
									purchase_units: [
										{
											amount: {
												currency_code: 'EUR', // Ensure currency code is uppercase
												value: `${eurValue}` // Use correct decimal format
											}
										}
									],
									intent: 'CAPTURE'
								});
							},
							onApprove: async (data, actions) => {
								await actions!.order!.capture();
								actSuccess();
								name = '';
								email = '';
								institution = '';
								isLoading = false;
							},
							onError: (err) => {
								if (!error) {
									paypalError = err.toString();
								}
							},

							onCancel: (err) => {
								error = 'tickets.buy.cancel';
							}
						}).render('#paypal-button-container');
					}
				}
			);
		}, 1000);

		import('lottie-web').then((lottie: any) => {
			checkboxAnimation = lottie.loadAnimation({
				container: checkboxIcon,
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: '/animations/checkbox/checkbox.json'
			});

			dinnerAnimation = lottie.loadAnimation({
				container: dinneIcon,
				renderer: 'svg',
				loop: false,
				autoplay: false,
				path: '/animations/checkbox/checkbox.json'
			});
		});

		// Handle click to play the animation in reverse or forward
		checkboxIcon.addEventListener('click', () => {
			checkboxAnimation.setDirection(checkboxDiretction);
			checkboxAnimation.play();
			checkboxDiretction = -checkboxDiretction;
		});

		// Handle click to play the animation in reverse or forward
		dinneIcon.addEventListener('click', () => {
			dinnerAnimation.setDirection(dinnerDirection);
			dinnerAnimation.play();
			dinnerDirection = -dinnerDirection;
		});
	});
</script>

<div class="form">
	<h1 in:fly={{ duration: 300, delay: 500, y: 20 }} out:fly={{ duration: 300, y: 20 }}>
		{$t('tickets.title')}
	</h1>

	<div id="form">
		<input
			type="text"
			bind:value={name}
			name="name"
			placeholder={$t('contacts.name')}
			in:fly={{ duration: 300, delay: 600, y: 20 }}
			out:fly={{ duration: 300, y: 20 }}
		/>
		<input
			type="email"
			bind:value={email}
			name="email"
			placeholder={$t('contacts.email')}
			in:fly={{ duration: 300, delay: 700, y: 20 }}
			out:fly={{ duration: 300, y: 20 }}
		/>
		<input
			type="text"
			bind:value={institution}
			name="text"
			id="instituition"
			placeholder={$t('contacts.institution')}
			in:fly={{ duration: 300, delay: 700, y: 20 }}
			out:fly={{ duration: 300, y: 20 }}
		/>
		<input
			type="text"
			bind:value={tiNumber}
			name="text"
			id="timember"
			placeholder={$t('tickets.number')}
			in:fly={{ duration: 300, delay: 700, y: 20 }}
			out:fly={{ duration: 300, y: 20 }}
		/>
		<div
			class="checkbox dinner"
			in:fly={{ duration: 300, delay: 900, y: 20 }}
			out:fly={{ duration: 300, y: 20 }}
		>
			<button aria-label="button" type="button" class="checkbox-item" bind:this={dinneIcon}
			></button>
			<button type="button" class="text" onclick={handleClickDinner}>
				<svg
					width="20px"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="size-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
					/>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
					/>
				</svg>

				{$t('contacts.dinner')}</button
			>
		</div>

		<div
			id="pricingTable"
			in:fly={{ duration: 300, delay: 850, y: 20 }}
			out:fly={{ duration: 300, y: 20 }}
		>
			{#each options as option}
				<div class="card">
					<h6>{$t(option.name)}</h6>
					<ul>
						{#each option.list as item}
							{#if item.id === 3}
								<p>{$t('tickets.early.text')}</p>
							{/if}

							<!-- svelte-ignore a11y_click_events_have_key_events -->
							<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
							<li
								class:active={item.id === activeId}
								onclick={() => selectFee(item.id, option.name, item.name)}
							>
								<span>
									{$t(item.name)}
								</span>
								<b>{item.value}€</b>
							</li>

							{#if item.id === 8}
								<p>{$t('tickets.acmop.text')}</p>
							{/if}
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div
			class="checkbox"
			in:fly={{ duration: 300, delay: 900, y: 20 }}
			out:fly={{ duration: 300, y: 20 }}
		>
			<button aria-label="button" type="button" class="checkbox-item" bind:this={checkboxIcon}
			></button>
			<button type="button" class="text" onclick={handleClickCheckbox}
				>{$t('contacts.terms')}</button
			>
		</div>

		<div id="payments">
			<div
				id="bank-transfer-payment"
				in:fly={{ duration: 300, delay: 1000, y: 20 }}
				out:fly={{ duration: 300, y: 10 }}
			>
				<button type="submit" class="text" onclick={payByBankTransfer}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class=""
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
						/>
					</svg>

					{$t('contacts.bankTransfer')}
				</button>
			</div>

			<div
				id="paypal-button-container"
				in:fly={{ duration: 300, delay: 1000, y: 20 }}
				out:fly={{ duration: 300, y: 20 }}
			></div>
		</div>
	</div>
	{#if modalBankTransfer}
		<dialog id="modal-bank">
			<div id="cortin"></div>

			<div>
				<button
					type="button"
					class="text"
					aria-label="Close modal"
					onclick={() => {
						modalBankTransfer = false;
					}}>&times;</button
				>
				<h1>Informações Bancárias</h1>
				<hr />
				<ul>
					<li>
						<span>Nome: </span> AQUITEX ACABAMENTOS QUIMICOS TEXTEIS SA
					</li>
					<li>
						<span>IBAN: </span> PT50.0033.0000.00000125519.05
					</li>
					<li>
						<span>SWIFT/BIC: </span> BCOMPTPL
					</li>
				</ul>
			</div>
		</dialog>
	{/if}

	{#if error.length > 0}
		<span class="error" in:fly={{ duration: 300, delay: 500, y: 20 }}>{$t(error)}</span>
	{/if}

	{#if paypalError.length > 0}
		<span class="error" in:fly={{ duration: 300, delay: 500, y: 20 }}>{paypalError}</span>
	{/if}

	{#if success}
		<span class="success" in:fly={{ duration: 300, delay: 500, y: 20 }}
			>{$t('tickets.buy.success')}</span
		>
	{/if}
</div>

<style lang="scss">
	.form {
		width: 50%;
		@media only screen and (max-width: 992px) {
			width: 100%;
		}
		& > h1 {
			font-size: 3rem;
			color: #292929;
			font-weight: bold;
			width: 100%;
			margin: auto;
			text-align: left;
		}
		& > #form {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			padding: 2rem 0;
			& > input {
				border-radius: 12px;
				background: #fff;
				padding: 1.25rem 1.875rem;
				width: calc(50% - 4.375rem);
				margin-bottom: 1.25rem;

				&#instituition {
					width: 50%;
				}

				&#timember {
					width: 30%;
				}
			}

			& > #pricingTable {
				width: 100%;
				padding: 30px 0 0;
				display: flex;
				justify-content: center;
				align-items: flex-start;
				flex-flow: column;
				& > .card {
					margin: 20px 0;
					& > h6 {
						font-size: 25px;
						margin: 0;
						text-align: left;
					}
					& > ul {
						padding: 15px 0;
						display: flex;
						justify-content: flex-start;
						align-items: center;
						flex-wrap: wrap;
						& > p {
							display: block;
							width: 100%;
							padding: 0 0 30px;
							margin: 0;
							text-align: left;
						}
						& > li {
							text-align: left;
							margin: 10px 20px 30px 0;
							border: 1px solid gray;
							padding: 15px;
							border-radius: 5px;
							cursor: pointer;
							transition: all ease 0.2s;
							&:hover {
								transform: translateY(-5px);
							}
							&.active {
								transform: translateY(-5px);
								background: #0070ba;
								border-color: #0070ba;
								color: white !important;
							}
							& > span {
								display: block;
								margin: 0 0 15px 0;
								font-weight: 500;
							}
						}
					}
				}
			}

			& > .checkbox {
				margin: -20px 0 1.25rem 0;
				display: flex;
				justify-content: left;
				width: 100%;
				align-items: center;
				& > button {
					font-size: 0.825rem;
					color: #525256;
					&.checkbox-item {
						scale: 0.6;
					}
				}

				&.dinner {
					margin: 0 0 0 0;
					background: #0070ba;
					width: auto !important;
					padding: 0 10px 0 0;
					border-radius: 3px;
					color: white;

					& > button {
						font-size: 1rem;
						color: #000000;
						filter: invert(1);
						display: flex;
						align-items: center;
						& > svg {
							margin: 0 10px 0 0;
						}

						&.checkbox-item {
							scale: 0.6;
						}
					}
				}
			}

			& > #payments {
				display: flex;
				justify-content: start;
				align-items: flex-start;
				flex-flow: column;
				width: 100%;
				div#bank-transfer-payment {
					margin: 0;

					& > button {
						background: #d14338;
						color: #fff;
						padding: 10px 30px;
						border-radius: 60px;
						font-size: 15px;
						margin-bottom: 20px;
						display: flex;
						align-items: center;
						justify-content: space-between;
						& > svg {
							width: 20px;
							margin-right: 15px;
						}
					}
				}
				& > div#paypal-button-container {
					margin: 0;
					z-index: 0;
				}
			}
		}

		& > dialog#modal-bank {
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, 0.5);
			display: flex;
			justify-content: center;
			align-items: center;
			position: fixed;
			top: 0;
			left: 0;
			& > #cortin {
				position: absolute;
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.5);
			}

			& > div {
				background: #fff;
				padding: 2rem;
				border-radius: 12px;
				z-index: 1;
				position: relative;
				& > button {
					position: absolute;
					top: 10px;
					right: 20px;
					background: none;
					border: none;
					color: #000;
					font-size: 2rem;
					cursor: pointer;
				}
				& > h1 {
					margin-bottom: 1rem;
					font-size: 2rem;
					color: #d14338;
					font-weight: bold;
					text-align: left;
				}
				& > hr {
					border: 1px solid black;
					margin: 1rem 0;
					width: 20%;
				}
				& > ul {
					list-style-type: none;
					text-align: left;
					padding: 20px 0;
					& > li {
						margin-bottom: 1rem;
						font-size: 1rem;
						color: #525256;

						& > span {
							font-weight: bold;
						}
					}
				}
			}
		}

		& > .error,
		& > .success {
			background: #d14338;
			padding: 0.625rem 1.25rem;
			color: #fff;
			border-radius: 12px;
			width: auto;
			margin: 0;
			float: left;
		}

		& > .success {
			background: #272727;
		}
	}
</style>
