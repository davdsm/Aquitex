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
