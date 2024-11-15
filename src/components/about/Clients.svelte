<script lang="ts">
	import Carousel from 'svelte-carousel';
	import { fly } from 'svelte/transition';

	const clients: { link: string; name: string; logo: string }[] = [
		{
			link: 'https://google.com',
			name: 'CLient 1',
			logo: 'about/clients/1.jpg'
		},
		{
			link: 'https://google.com',
			name: 'CLient 2',
			logo: 'about/clients/2.jpg'
		},
		{
			link: 'https://google.com',
			name: 'CLient 3',
			logo: 'about/clients/3.jpg'
		},
		{
			link: 'https://google.com',
			name: 'CLient 4',
			logo: 'about/clients/4.jpg'
		},
		{
			link: 'https://google.com',
			name: 'CLient 5',
			logo: 'about/clients/5.jpg'
		},
		{
			link: 'https://google.com',
			name: 'CLient 6',
			logo: 'about/clients/6.jpg'
		}
	];
</script>

<div id="clients" in:fly={{ duration: 300, delay: 400, y: 20 }}>
	<ul>
		<Carousel
			particlesToShow={5}
			particlesToScroll={1}
			duration={5000}
			autoplay
			timingFunction="linear"
			dots={false}
			arrows={false}
		>
			{#each clients as client}
				<li>
					<a href={client.link}>
						<img src={client.logo} alt={client.name} />
					</a>
				</li>
			{/each}
		</Carousel>
	</ul>
</div>

<style lang="scss">
	#clients {
		width: 115.5%;
		margin: 5rem 0 0 -10%;
		max-width: calc(100vw + 5%);
		& > ul {
			width: 100%;
			& li {
				text-align: center;
				& > a {
					text-align: center;
					& > img {
						height: 3.75rem;
						@media only screen and (max-width: 992px) {
							height: 2.75rem;
						}
					}
				}
			}
		}
	}
</style>
