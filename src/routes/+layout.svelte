<script lang="ts">
	import '../app.css';
	import Footer from '../components/layout/Footer.svelte';
	import Header from '../components/layout/Header.svelte';
	let { children } = $props();
</script>

<Header />
<main>
	{@render children()}
</main>
<Footer />

<style lang="scss">
	main {
		text-align: center;
	}
</style>
