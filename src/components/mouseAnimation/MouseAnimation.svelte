<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const cursorSize = 30;

	let isHovering = false;

	const mouseX = tweened(0, { duration: 1000, easing: cubicOut });
	const mouseY = tweened(0, { duration: 1000, easing: cubicOut });

	const manageMouseMove = (e: MouseEvent) => {
		const { clientX, clientY } = e;
		mouseX.set(clientX - cursorSize / 2);
		mouseY.set(clientY - cursorSize / 2);
	};

	// Set hovering state when hovering over buttons or links
	const handleMouseEnter = () => (isHovering = true);
	const handleMouseLeave = () => (isHovering = false);

	onMount(() => {
		window.addEventListener('mousemove', manageMouseMove);

		// Add event listeners for buttons and links
		document.querySelectorAll('button, a').forEach((el) => {
			el.addEventListener('mouseenter', handleMouseEnter);
			el.addEventListener('mouseleave', handleMouseLeave);
		});

		return () => {
			window.removeEventListener('mousemove', manageMouseMove);
			document.querySelectorAll('button, a').forEach((el) => {
				el.removeEventListener('mouseenter', handleMouseEnter);
				el.removeEventListener('mouseleave', handleMouseLeave);
			});
		};
	});
</script>

<div class="cursorContainer">
	<div
		class="cursor"
		class:hovering={isHovering}
		style="transform: translate({$mouseX}px, {$mouseY}px);"
	></div>
</div>

<style lang="scss">
	.cursorContainer {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
		z-index: 9999;
	}

	.cursor {
		position: absolute;
		width: 30px;
		height: 30px;
		background-color: transparent;
		border-radius: 50%;
		pointer-events: none;
		border: 1px solid black;
		transition: width ease 1s, height ease 1s;
		&.hovering {
			width: 45px;
			height: 45px;
		}
	}
</style>
