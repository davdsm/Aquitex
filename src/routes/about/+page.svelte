<script>
	import { fly } from 'svelte/transition';
	import Intro from '../../components/about/Intro.svelte';
	import Video from '../../components/about/Video.svelte';
	import Divider from '../../components/about/Divider.svelte';
	import Policy from '../../components/about/Policy.svelte';
	import Clients from '../../components/about/Clients.svelte';
</script>

<div id="about" out:fly={{ duration: 300, y: 20 }}>
	<Intro />
	<Video />
	<Divider />
	<Policy />
	<Clients />
</div>

<style lang="scss">
	#about {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-flow: column;
	}
</style>
