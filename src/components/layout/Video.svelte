<script lang="ts">
	import { fade } from 'svelte/transition';
	export let close: Function;
</script>

<div
	id="video-full"
	in:fade={{ duration: 300, delay: 200 }}
	out:fade={{ duration: 300, delay: 200 }}
>
	<div class="cortin"></div>
	<button aria-label="close-video" id="close" onclick={() => close()}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="size-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
			/>
		</svg>
	</button>
	<video autoplay autofocus>
		<source src="/video.mp4" type="video/mp4" />
		<track kind="captions" />
		Your browser does not support the video tag.
	</video>
</div>

<style lang="scss">
	#video-full {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		left: 0;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		flex-direction: column;
		& > .cortin {
			background: #000;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: 0.9;
		}
		& > button#close {
			width: 1.875rem;
			height: 1.875rem;
			color: white;
			z-index: 11;
			align-self: flex-end;
			margin-right: 20%;
			transform: translateY(3.75rem);
			position: relative;

			@media only screen and (max-width: 992px) {
				margin-right: 15%;
			}
		}
		& > video {
			width: 70%;
			border-radius: 1.875rem;
			position: relative;
			z-index: 10;
			height: auto;

			@media only screen and (max-width: 992px) {
				width: 80%;
			}
		}
	}
</style>
