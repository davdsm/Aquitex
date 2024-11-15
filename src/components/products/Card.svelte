<script lang="ts">
	import { fly } from 'svelte/transition';

	export let project: {
		id: string;
		title: string;
		description: string;
		image: string;
		link: string;
	};
</script>

<a href="/products" class="product-card {project.id}">
	<div class="image">
		<img src={project.image} alt={project.title} />
	</div>
	<div class="description">
		<h1>{project.title}</h1>
		<p>{project.description}</p>
	</div>
</a>

<style lang="scss">
	.product-card {
		padding: 1.875rem;
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		border-radius: 1.875rem;
		height: 17.5rem;
		transition: all ease 2s;
		margin: 0 0 3.125rem 0;

		@media only screen and (max-width: 992px) {
			height: 100% !important;
            align-items: flex-start;
		}

		& > .image {
			width: 30%;
			text-align: left;
			margin: 0;
			height: 100%;

			@media only screen and (max-width: 992px) {
				height: 20% !important;
			}

			& > img {
				width: 100%;
				height: auto;
				border-radius: 1.5625rem;
				height: 100%;
				object-fit: cover;
			}
		}
		& > .description {
			width: calc(60% - 60px);

			@media only screen and (max-width: 992px) {
				height: 20% !important;
                width: calc(70% - 3.750rem);
			}

			& > h1 {
				font-size: 2.0625rem;
				font-weight: bold;
				color: #000;
				line-height: 2.375rem;
				text-align: left;
			}
			& > p {
				font-size: 1.5rem;
				font-weight: bold;
				color: #b1653b;
				line-height: 2.1875rem;
				padding-top: 3.75rem;
				text-align: left;
			}
		}

		&.textile {
			border: 2px solid #bed2f5;
			background: #bed2f5;
			width: calc(40% - 60px);

			p {
				color: #0046c7;
			}

			&:hover {
				transform: translateY(-15px);
				border: 2px solid #0046c7;
			}
		}
		&.ceramic {
			border: 2px solid #dcb688;
			background: #dcb688;
			width: calc(55% - 3.75rem);

			p {
				color: #b1653b;
			}

			&:hover {
				transform: translateY(-15px);
				border: 2px solid #b1653b;
			}
		}
		&.cosmetic {
			border: 2px solid #d9db4d;
			background: #d9db4d;
			width: 100%;

			p {
				color: #66662a;
			}

			&:hover {
				transform: translateY(-15px);
				border: 2px solid #66662a;
			}
		}
		@media only screen and (max-width: 992px) {
			width: 100% !important;
		}
	}
</style>
