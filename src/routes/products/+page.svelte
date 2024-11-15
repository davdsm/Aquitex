<script lang="ts">
	import { fly } from 'svelte/transition';
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
			title: 'Departamento Têxtil',
			description: 'Soluções químicas que elevam a qualidade e durabilidade dos tecidos.',
			image: '/products/textile.jpg',
			link: '/products/textile'
		},
		{
			id: 'ceramic',
			title: 'Departamento de Cerâmica',
			description: 'Produtos químicos que aprimoram a resistência e beleza da cerâmica.',
			image: '/products/ceramic.jpg',
			link: '/products/ceramic'
		},
		{
			id: 'cosmetic',
			title: 'Detergência e Cosmética',
			description:
				'Criamos soluções químicas de alta qualidade para detergentes e cosméticos, combinando eficácia com responsabilidade ambiental para atender às necessidades do setor de cuidados pessoais e de limpeza',
			image: '/products/cosmetic.jpg',
			link: '/products/cosmetic'
		}
	];
</script>

<div id="products" in:fly={{ duration: 300, delay: 400, y: 20 }} out:fly={{ duration: 300, y: 20 }}>
	{#each projects as project}
		<Card {project} />
	{/each}
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
