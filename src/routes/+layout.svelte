<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import LocomotiveScroll from 'locomotive-scroll';
	import Footer from '../components/layout/Footer.svelte';
	import Header from '../components/layout/Header.svelte';
	import '../app.css';
	let { children } = $props();

	let mouse = { x: 0, y: 0 };
	let circle: HTMLElement;
	const size = 30;

	const manageMouseMove = (e: { clientX: any; clientY: any; }) => {
		const { clientX, clientY } = e;

		mouse = {
			x: clientX,
			y: clientY
		};

		moveCircle(mouse.x, mouse.y);
	};

	const moveCircle = (x: number, y: number) => {
		gsap.set(circle, { x, y, xPercent: -50, yPercent: -50 });
	};

	onMount(() => {
		const locomotiveScroll = new LocomotiveScroll();
		window.addEventListener('mousemove', manageMouseMove);
		return () => {
			window.removeEventListener('mousemove', manageMouseMove);
		};
	});
</script>

<Header />
<main data-scroll data-scroll-speed>
	<div bind:this={circle} class="circle" style="--size: {size}px"></div>
	{@render children()}
</main>
<Footer />

<style lang="scss">
	.circle {
		background-color: transparent;
		width: var(--size);
		height: var(--size);
		position: fixed;
		top: 0;
		left: 0;
		border-radius: 50%;
		pointer-events: none;
		border: 1px solid #272727;
	}
	main {
		text-align: center;
		height: 100vh;
	}
</style>
