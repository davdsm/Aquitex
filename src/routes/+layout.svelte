<script lang="ts">
	import { onMount } from 'svelte';
	import LocomotiveScroll from 'locomotive-scroll';
	import Footer from '../components/layout/Footer.svelte';
	import Header from '../components/layout/Header.svelte';
	import Mouse from '../components/mouseAnimation/MouseAnimation.svelte';
	import '../app.css';
	
	let { children } = $props();

	onMount(() => {
		const locomotiveScroll = new LocomotiveScroll();
	});
</script>

<Header />
<Mouse />
<main data-scroll data-scroll-speed>
	{@render children()}
</main>
<Footer />

<style lang="scss">
	main {
		text-align: center;
		height: 100vh;
	}
</style>
