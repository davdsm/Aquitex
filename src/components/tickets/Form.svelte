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
	let isLoading: boolean = $state(false);
	let success: boolean = $state(false);
	let paymentId: string = '';
	let options = [
		{
			name: 'Standard Fees',
			list: [
				{
					name: 'Non TI Member',
					value: 800
				},
				{
					name: 'TI Member',
					value: 660
				}
			]
		},
		{
			name: 'Early Bird Fees',
			list: [
				{
					name: 'Non TI Member',
					value: 660
				},
				{
					name: 'TI Member',
					value: 515
				}
			]
		},
		{
			name: 'Other Fees',
			list: [
				{
					name: 'TI Representative',
					value: 480
				},
				{
					name: 'Student',
					value: 240
				},
				{
					name: 'Day Rate',
					value: 300
				},
				{
					name: 'Day Rate',
					value: 240
				}
			]
		}
	];

	const handleClickCheckbox = () => {
		checkboxIcon.click();
	};

	const handleClickDinner = () => {
		dinneIcon.click();
	};

	const actSuccess = () => {
		API.setPaymentTrue(paymentId);
		success = true;
		sendConfirmation(
			name,
			email,
			$t('tickets.buy.success.email'),
			$locale.toUpperCase() === 'PT' ? 'PT' : 'EN'
		);
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
		await API.createPayment(name, email, institution, dinnerDirection !== 1, paymentId);
		return true;
	};

	onMount(() => {
		import('lottie-web').then(() =>
			loadScript({ clientId: env.PAYPAL_ClIENT_ID, currency: 'EUR' }).then(
				(paypal: PayPalNamespace | null) => {
					if (paypal) {
						paypal!.Buttons!({
							style: {
								color: 'blue',
								shape: 'pill'
							},
							createOrder: async (data, actions) => {
								const formIsValid = await submitForm();
								if (!formIsValid) {
									// Reject the promise to prevent order creation
									return Promise.reject(new Error('Form validation failed'));
								}
								return actions.order.create({
									purchase_units: [
										{
											amount: {
												currency_code: 'EUR', // Ensure currency code is uppercase
												value: '1.00' // Use correct decimal format
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
			)
		);

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
		<div
			class="checkbox dinner"
			in:fly={{ duration: 300, delay: 900, y: 20 }}
			out:fly={{ duration: 300, y: 20 }}
		>
			<button aria-label="button" type="button" class="checkbox-item" bind:this={dinneIcon}
			></button>
			<button type="button" class="text" onclick={handleClickDinner}>{$t('contacts.dinner')}</button
			>
		</div>

		<div id="pricingTable">
			{#each options as option}
				<div class="card">
					<h6>{option.name}</h6>
					<ul>
						{#each option.list as item}
							<li>
								<span>
									{item.name}
								</span>
								<b>{item.value}€</b>
							</li>
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

		<div
			id="paypal-button-container"
			in:fly={{ duration: 300, delay: 1000, y: 20 }}
			out:fly={{ duration: 300, y: 20 }}
		></div>
	</div>

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
					width: 100%;
				}
			}

			& > #pricingTable {
				width: 100%;
				padding: 30px 0;
				display: flex;
				justify-content: center;
				align-items: flex-start;
				flex-flow: column;
				& > .card {
					margin: 20px 0;
					& > h6 {
						font-size: 25px;
					}
				}
			}

			& > .checkbox {
				margin: 0 0 1.25rem 0;
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
					background: #d14338;
					width: auto !important;
					padding: 0 10px 0 0;
					border-radius: 3px;
					color: white;

					& > button {
						font-size: 1rem;
						color: #000000;
						filter: invert(1);

						&.checkbox-item {
							scale: 0.6;
						}
					}
				}
			}
			& > div#paypal-button-container {
				margin: 0;
				z-index: 0;
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
