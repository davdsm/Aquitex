<script>
	import { fly } from 'svelte/transition';
	import Intro from '../components/homepage/Intro.svelte';
	import Labs from '../components/homepage/Labs.svelte';
</script>

<div id="home" out:fly={{ duration: 300, y: 20 }}>
	<Intro />
	<Labs />
</div>

<style lang="scss">
	#home {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-flow: column;
	}
</style>
