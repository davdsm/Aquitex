<script lang="ts">
	import { sendMail } from '$lib';
	import { t } from '$lib/i18n/i18n';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let checkboxIcon: HTMLElement;
	let checkboxDiretction = 1;
	let checkboxAnimation: any;
	let error: string = $state('');
	let name: string = $state('');
	let email: string = $state('');
	let institution: string = $state('');
	let dinner: boolean = $state(false);
	let isLoading: boolean = $state(false);
	let success: boolean = $state(false);

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

		isLoading = true;

		setTimeout(async () => {
			// TODO: DO PAYMENT HERE
			localStorage.setItem('paymentId', "id" + Math.random().toString(16).slice(2))
			name = '';
			email = '';
			institution = '';
			dinner = false;
			isLoading = false;
		}, 500);

	};

	const actSuccess = () => {
		console.log('success...');
		localStorage.removeItem('paymentId')
		window.location.search = "";
	}

	const handleClickCheckbox = () => {
		checkboxIcon.click();
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
		});

		// Handle click to play the animation in reverse or forward
		checkboxIcon.addEventListener('click', () => {
			checkboxAnimation.setDirection(checkboxDiretction);
			checkboxAnimation.play();
			checkboxDiretction = -checkboxDiretction;
		});

		const urlParams = window.location.search;
		if(urlParams === "?success=true") {
			actSuccess();
		}
		
	});
</script>

<div class="form">
	<h1 in:fly={{ duration: 300, delay: 500, y: 20 }} out:fly={{ duration: 300, y: 20 }}>
		{$t('contacts.title')}
	</h1>
	<form action="" method="get" onsubmit={submitForm}>
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
			name="email"
			placeholder={$t('contacts.institution')}
			in:fly={{ duration: 300, delay: 700, y: 20 }}
			out:fly={{ duration: 300, y: 20 }}
		/>
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
		{
			// TODO:
			// ADD BUTTON CODE HERE
			console.log('test')
			
		}
		<button type="submit">asd</button>
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
			}
			& > button {
				width: auto;
				background: #d14338;
				color: #fff;
				padding: 1.25rem 2.5rem;
				border-radius: 1.875rem;
				transition: all ease 2s;
				font-weight: 600;
				&:hover {
					transform: translateY(-5px);
					box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
