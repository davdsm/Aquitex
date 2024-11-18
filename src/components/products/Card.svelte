<script lang="ts">
	import { fly } from 'svelte/transition';

	export let project: {
		id: string;
		title: string;
		description: string;
		image: string;
		link: string;
	};

	export let delay: number;
</script>

<a
	href="/products"
	class="product-card {project.id}"
	in:fly={{ duration: 800, delay: delay, y: 20 }}
	out:fly={{ duration: 300, y: 20 }}
>
	<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
		position: relative;

		&:after {
			content: url('/helpers/big-corner.svg');
			position: absolute;
			bottom: 9px;
			right: 16px;
			z-index: 0;
			transform: translateX(15px) translateY(-15px);
			transition: all ease 0.5s;
			opacity: 1;
			rotate: 90deg;
		}
		&:hover {
			& > svg {
				rotate: 20deg;
				transform: translateY(-15px);
			}
		}

		@media only screen and (max-width: 992px) {
			height: auto !important;
			align-items: flex-start;

			&:after {
				width: 60px;
				height: 150px;
				bottom: -25px;
				display: none;
			}
		}

		& > svg {
			position: absolute;
			right: 30px;
			bottom: 30px;
			z-index: 1;
			transition: all ease 2s;
			@media only screen and (max-width: 992px) {
				right: 1px;
				scale: 0.7;
				bottom: -6px;
				display: none;
			}
		}

		& > .image {
			width: 30%;
			text-align: left;
			margin: 0;
			height: 100%;

			@media only screen and (max-width: 992px) {
				height: 100% !important;
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
				width: calc(70% - 3.75rem);
				margin: 0;
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
				@media only screen and (max-width: 992px) {
					padding-top: 1.75rem;
				}
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
			}
		}
		@media only screen and (max-width: 992px) {
			width: 100% !important;
		}
	}
</style>
