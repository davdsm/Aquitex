<script lang="ts">
	import Card from '../../components/products/Card.svelte';

	const projects: {
		id: string;
		title: string;
		description: string;
		image: string;
		link: string;
	}[] = [
		{
			id: 'textile',
			title: 'products.textile',
			description: 'products.textile.text',
			image: '/products/textile.jpg',
			link: '/products/textile'
		},
		{
			id: 'ceramic',
			title: 'products.ceramic',
			description: 'products.ceramic.text',
			image: '/products/ceramic.jpg',
			link: '/products/ceramic'
		},
		{
			id: 'cosmetic',
			title: 'products.estic',
			description: 'products.cosmetic.text',
			image: '/products/cosmetic.jpg',
			link: '/products/cosmetic'
		}
	];
</script>

<div id="products">
	<Card project={projects[0]} delay={400} />
	<Card project={projects[1]} delay={500} />
	<Card project={projects[2]} delay={600} />
</div>

<style lang="scss">
	#products {
		margin: 50px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
</style>
