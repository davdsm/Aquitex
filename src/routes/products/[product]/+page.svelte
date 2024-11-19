<script lang="ts">
	import { t } from '$lib/i18n/i18n';
	import { fly } from 'svelte/transition';
	import { redirect } from '@sveltejs/kit';
	import products from '$lib/products.json';
	import { onMount } from 'svelte';

	type ProductCategory = {
		title: string;
		list: string[];
	};

	const { data } = $props();
	const product = data.product;

	let categories: any = $state([]);
	let selectedCategory = $state('');

	switch (product) {
		case 'ceramic':
			categories = products.ceramic;
			selectedCategory = 'products.list.ceramic.ceramic_plasters';
			break;
		case 'cosmetic':
			categories = products.cosmetic;
			selectedCategory = 'products.list.cosmetic.phosphonates';
			break;
		case 'textile':
			categories = products.textile;
			selectedCategory = 'products.list.textile.preparation';
			break;
		default:
			redirect(307, '/');
	}

	let list: string[] = $state([]);
	const changeCategory = (title: string) => {
		const _category: ProductCategory = categories.find(
			(cat: ProductCategory) => cat.title === title
		);
		selectedCategory = _category ? _category.title : '';
		list = _category ? _category.list : [];
	};

	onMount(() => {
		changeCategory(selectedCategory);
	});
</script>

<ul id="filters" in:fly={{ duration: 300, delay: 600, y: 20 }} out:fly={{ duration: 300, y: 20 }}>
	{#each categories as category}
		<li>
			<button
				class:active={category.title === selectedCategory}
				type="button"
				onclick={() => changeCategory(category.title)}
			>
				{$t(category.title)}
			</button>
		</li>
	{/each}
</ul>

<ul id="products" in:fly={{ duration: 300, delay: 800, y: 20 }} out:fly={{ duration: 300, y: 20 }}>
	{#each list as item}
		<li in:fly={{ duration: 300, delay: 800, y: 20 }} out:fly={{ duration: 300, y: 20 }}>
			<a type="button" href="/contacts">
				{$t(item)}
				<span
					>{$t('know-more')}
					<svg
						width="30"
						height="30"
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_15_1290)">
							<path
								d="M22.4816 8.92394C22.4816 8.6404 22.3803 8.39735 22.1778 8.19481C21.9752 7.99227 21.7322 7.891 21.4486 7.89099L10.9979 8.1338C10.3497 8.21479 10.0054 8.55909 9.96495 9.1667C10.046 9.81481 10.4004 10.149 11.0283 10.1693L18.8967 10.0175L8.56772 20.3466C8.16266 20.8326 8.16267 21.3187 8.56775 21.8048C9.05385 22.2099 9.53993 22.2099 10.026 21.8048L20.355 11.4758L20.1729 19.3747C20.2134 19.9823 20.5578 20.3266 21.2059 20.4076C21.8135 20.3671 22.1578 20.0228 22.2388 19.3747L22.4816 8.92394Z"
								fill="#292929"
							/>
						</g>
						<defs>
							<clipPath id="clip0_15_1290">
								<rect
									width="19.2474"
									height="21.9981"
									fill="white"
									transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 16.3452 29.5825)"
								/>
							</clipPath>
						</defs>
					</svg>
				</span>
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	#filters {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		@media only screen and (max-width: 992px) {
			justify-content: left;
		}
		& > li {
			& > button {
				width: auto;
				padding: 1.25rem 1.875rem;
				color: #000;
				border: 2px solid #d9db4d;
				background: #fff;
				font-size: 1rem;
				font-weight: bold;
				border-radius: 2.5rem;
				margin: 1rem;
				transition: all ease 0.2s;
				&:hover,
				&.active {
					background: #d9db4d;
				}
			}
		}
	}
	#products {
		display: flex;
		justify-content: left;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 2.5rem;
		& > li {
			& > a {
				background: #ecf4fe;
				padding: 1.875rem 2.5rem;
				border-radius: 1.875rem;
				font-size: 1.75rem;
				color: #292929;
				font-weight: 600;
				margin-bottom: 1.25rem;
				margin-right: 1.25rem;
				transition: all ease 1s;
				&:hover {
					transform: translateY(-5px);
					& > span {
						& > svg {
							rotate: 15deg;
						}
					}
				}
				& > span {
					padding: 1.25rem 0 0;
					font-size: 1.25rem;
					color: #292929;
					display: block;
					width: 100%;
					text-align: right;
					display: flex;
					align-items: center;
					justify-content: right;
					& > svg {
						transition: all ease 2s;
						width: 1.25rem;
						margin-left: 1.09rem;
					}
				}
			}
		}
	}
</style>
