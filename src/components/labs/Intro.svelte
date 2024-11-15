<script lang="ts">
	import { fly } from 'svelte/transition';
	import { t } from '$lib/i18n/i18n';
	export let title: string;
	export let text: string;
</script>

<div id="lab">
	<h1 in:fly={{ duration: 300, delay: 400, y: 20 }} out:fly={{ duration: 300, y: 20 }}>
		{$t(title)}
	</h1>
	<p in:fly={{ duration: 300, delay: 500, y: 20 }} out:fly={{ duration: 300, y: 20 }}>
		{$t(text)}
	</p>
</div>

<style lang="scss">
	#lab {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
		& > h1 {
			margin: 0;
			font-size: 4rem;
			color: #292929;
			font-weight: 600;
			width: 30%;
			text-align: left;
			@media only screen and (max-width: 992px) {
				width: 100%;
			}
		}
		& > p {
			margin: 0;
			font-size: 2.25rem;
			color: #292929;
			font-weight: 600;
			width: 50%;
			text-align: left;
			@media only screen and (max-width: 992px) {
				margin-top: 30px;
				width: 100%;
			}
		}
	}
</style>
