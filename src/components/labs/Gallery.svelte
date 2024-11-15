<script lang="ts">
	import { fly } from 'svelte/transition';
	import { t } from '$lib/i18n/i18n';

	export let images: string[]
	export let lab: string
</script>
<!-- I'm doing this way so animations can enter sequentialy -->
<div id="gallery">
	<img
		src={images[0]}
		alt={$t(lab)}
		in:fly={{ duration: 300, delay: 500, y: 20 }}
		out:fly={{ duration: 300, y: 20 }}
	/>
	<img
		src={images[1]}
		alt={$t(lab)}
		in:fly={{ duration: 300, delay: 600, y: 20 }}
		out:fly={{ duration: 300, y: 20 }}
	/>
	<img
		src={images[2]}
		alt={$t(lab)}
		in:fly={{ duration: 300, delay: 700, y: 20 }}
		out:fly={{ duration: 300, y: 20 }}
	/>
	<img
		src={images[3]}
		alt={$t(lab)}
		in:fly={{ duration: 300, delay: 800, y: 20 }}
		out:fly={{ duration: 300, y: 20 }}
	/>
</div>

<style lang="scss">
	#gallery {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
		margin-top: 5rem;
		& > img {
			object-fit: cover;
			border-radius: 1.875rem;
			height: 25rem;
			margin-top: 2rem;
			width: 48%;
			&:nth-child(1) {
				width: 60%;
			}
			&:nth-child(2) {
				width: 38%;
			}
			&:nth-child(3) {
				width: 38%;
			}
			&:nth-child(4) {
				width: 60%;
			}
		}
	}
</style>
