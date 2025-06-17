<script lang="ts">
	import { onMount } from 'svelte';
	import Footer from '../components/layout/Footer.svelte';
	import Header from '../components/layout/Header.svelte';
	import MouseAnimation from '../components/mouseAnimation/MouseAnimation.svelte';
	import '../app.css';

	let isReady = $state(false);
	let { children } = $props();

	onMount(() => {
		isReady = true;
	});
</script>

{#if !isReady}
	<div class="content">
		<Header />
		<MouseAnimation />
		<main data-scroll data-scroll-speed>
			{@render children()}
		</main>
		<Footer />
	</div>
{/if}

{#if isReady}
	<Header />
	<MouseAnimation />
	<main data-scroll data-scroll-speed>
		{@render children()}
	</main>
	<Footer />
{/if}

<style lang="scss">
	.content {
		opacity: 0;
		overflow: hidden;
	}
	main {
		text-align: center;
		
		max-width: 1720px;
		margin: 0 auto;
	}
</style>
