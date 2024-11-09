<script lang="ts">
	import { fly } from 'svelte/transition';
	import { t } from '$lib/i18n/i18n';
</script>

<div id="labs">
	<div class="intro">
		<span in:fly={{ duration: 300, delay: 1000, y: 20 }}>
			{$t('labs')}
		</span>
		<h2 in:fly={{ duration: 300, delay: 1100, y: 20 }}>Os Nossos Laboratórios de Vanguarda</h2>
	</div>
</div>

<style lang="scss">
	#labs {
		display: flex;
		flex-flow: column;
		margin: 0;
		width: 100%;
		padding: 100px 0;
		& > .intro {
			margin: 0;
			text-align: left;
			& > span {
				font-size: 16px;
				font-weight: bold;
				padding-bottom: 18px;
				border-bottom: 1px solid #c0c0c0;
				width: 100%;
				display: block;
			}
			& > h2 {
				font-size: 64px;
				font-weight: 600;
				width: 50%;
				max-width: 710px;
				margin: 30px 0;
			}
		}
	}
</style>
