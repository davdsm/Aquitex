<script lang="ts">
	import { sendMail } from '$lib';
	import { API } from '$lib/calls/api';
	import { t } from '$lib/i18n/i18n';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let checkboxIcon: HTMLElement;
	let checkboxDiretction = 1;
	let checkboxAnimation: any;
	let dinneIcon: HTMLElement;
	let dinnerDirection = 1;
	let dinnerAnimation: any;
	let error: string = $state('');
	let name: string = $state('');
	let email: string = $state('');
	let institution: string = $state('');
	let isLoading: boolean = $state(false);
	let success: boolean = $state(false);

	const handleClickCheckbox = () => {
		checkboxIcon.click();
	};

	const handleClickDinner = () => {
		dinneIcon.click();
	};

	const actSuccess = () => {
		API.setPaymentTrue(localStorage.getItem('paymentId') || '');
	};

	const submitForm = async (e: Event) => {
		e.preventDefault();
		error = '';

		if (!name) {
			error = 'contacts.errors.name';
			return;
		}

		if (!email) {
			error = 'contacts.errors.email';
			return;
		}
		if (checkboxDiretction === 1) {
			error = 'contacts.errors.checkboxDiretction';
			return;
		}

		window.open('https://www.paypal.com/ncp/payment/E36QJV4D9KWN6');

		isLoading = true;
		const paymentId = 'id' + Math.random().toString(16).slice(2);
		localStorage.setItem('paymentId', paymentId);
		const res = await API.createPayment(name, email, institution, dinnerDirection !== 1, paymentId);

		name = '';
		email = '';
		institution = '';
		isLoading = false;
	};

	onMount(() => {
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

		const urlParams = window.location.search;
		if (urlParams === '?success=true') {
			actSuccess();
		}
	});
</script>

<div class="form">
	<h1 in:fly={{ duration: 300, delay: 500, y: 20 }} out:fly={{ duration: 300, y: 20 }}>
		{$t('contacts.title')}
	</h1>

	<form
		action="https://www.paypal.com/ncp/payment/E36QJV4D9KWN6"
		method="post"
		target="_blank"
		onsubmit={submitForm}
	>
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

		<button
			type="submit"
			in:fly={{ duration: 300, delay: 1000, y: 20 }}
			out:fly={{ duration: 300, y: 20 }}
		>
			<svg
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
					d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
				/>
			</svg>
			{$t('tickets.buy')}
		</button>
		<div
			class="img"
			in:fly={{ duration: 300, delay: 1100, y: 20 }}
			out:fly={{ duration: 300, y: 20 }}
		>
			<img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
		</div>
	</form>

	{#if error.length > 0}
		<span class="error" in:fly={{ duration: 300, delay: 500, y: 20 }}>{$t(error)}</span>
	{/if}

	{#if success}
		<span class="success" in:fly={{ duration: 300, delay: 500, y: 20 }}>{$t('contacts.sent')}</span>
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
		& > form {
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
			& > textarea {
				background: #fff;
				padding: 1.25rem 1.875rem;
				width: 100%;
				border-radius: 12px;
				margin-bottom: 1.25rem;
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
					& > button {
						font-size: 1rem;
						color: #000000;
						&.checkbox-item {
							scale: 0.6;
						}
					}
				}
			}
			& > button {
				width: auto;
				background: #d14338;
				color: #fff;
				padding: 1.25rem 2.5rem;
				border-radius: 1.875rem;
				transition: all ease 2s;
				font-weight: 600;
				display: flex;
				align-items: center;
				& > svg {
					width: 25px;
					margin-right: 15px;
				}
				&:hover {
					transform: translateY(-5px);
					box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
				}
			}
			& > div.img {
				width: 100%;
				text-align: left;
				padding: 20px 0 0 0;
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
