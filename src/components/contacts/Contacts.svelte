<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import { fly } from 'svelte/transition';
</script>

<div class="contacts">
	<h1 in:fly={{ duration: 300, delay: 1100, y: 20 }} out:fly={{ duration: 300, y: 20 }}>
		{$t('contacts.info.title')}
	</h1>
	<div class="info">
		<div in:fly={{ duration: 300, delay: 1200, y: 20 }} out:fly={{ duration: 300, y: 20 }}>
			<h6>{$t('contacts.info.subtitle')}</h6>
			<hr />
			<a href="mailto:grupo@aquitex.pt">grupo@aquitex.pt</a>
			<span> Rua Augusto Simões, 1042 <br /> 4425-626 Pedrouços <br /> Portugal </span>
		</div>
		<div in:fly={{ duration: 300, delay: 1300, y: 20 }} out:fly={{ duration: 300, y: 20 }}>
			<h6>{$t('contacts.info.contact')}</h6>
			<hr />
			<a href="tel:+351229069300">+ 351 22 906 9300</a>
			<span>{$t('contacts.info.national')}</span>
		</div>
	</div>
</div>

<style lang="scss">
	.contacts {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
		margin: 6rem 0;
		& > h1 {
			font-size: 3.5rem;
			color: #2e2e2e;
			width: 45%;
			font-weight: bold;
			text-align: left;
			@media only screen and (max-width: 992px) {
				width: 70%;
				text-align: center;
				margin: auto;
			}
		}
		& > .info {
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			margin: 0;
			width: 50%;

			@media only screen and (max-width: 992px) {
				width: 100%;
				flex-direction: column;
				justify-content: center;
			}

			& > div {
				text-align: left;
				margin: 0;
				width: 45%;
				display: flex;
				flex-flow: column;
				flex-wrap: wrap;

				@media only screen and (max-width: 992px) {
					width: 100%;
					text-align: center;
					margin-top: 40px;
				}

				& > h6 {
					font-size: 1.375rem;
					color: #2e2e2e;
					font-weight: 600;
				}
				& > hr {
					width: 1.875rem;
					height: 3px;
					background: #2e2e2e;
					border-radius: 2rem;
					margin: 1.2rem 0;

					@media only screen and (max-width: 992px) {
						margin: 1.2rem auto;
					}
				}
				& > a {
					font-size: 1.375rem;
					font-weight: 600;
					margin: 0;
					color: #2e2e2e;
					width: 100%;
					margin-bottom: 1rem;
				}
				& > span {
					font-size: 1rem;
					font-weight: 500;
					color: #2e2e2e;
				}
			}
		}
	}
</style>
