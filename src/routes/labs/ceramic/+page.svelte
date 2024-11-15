<script>
	import Intro from '../../../components/labs/Intro.svelte';
	import Gallery from '../../../components/labs/Gallery.svelte';

	const images = [
		'/labs/ceramic/1.jpg',
		'/labs/ceramic/2.jpg',
		'/labs/ceramic/3.jpg',
		'/labs/ceramic/4.jpg'
	];
</script>

<Intro title="lab.ceramic.title" text="lab.ceramic.text" />
<Gallery {images} lab="lab.ceramic.title" />
