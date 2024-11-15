<script>
	import Intro from '../../../components/labs/Intro.svelte';
	import Gallery from '../../../components/labs/Gallery.svelte';

	const images = [
		'/labs/textile/1.jpg',
		'/labs/textile/2.jpg',
		'/labs/textile/3.jpg',
		'/labs/textile/4.jpg'
	];
</script>

<Intro title="lab.textile.title" text="lab.textile.text" />
<Gallery {images} lab="lab.textile.title" />
