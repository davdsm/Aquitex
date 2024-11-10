<script lang="ts">
	import Carousel from 'svelte-carousel';

	import { fly } from 'svelte/transition';
	import { t } from '$lib/i18n/i18n';
</script>

<div id="divider" in:fly={{ duration: 300, delay: 400, y: 20 }}>
	<ul>
		<Carousel
			particlesToShow={5}
			particlesToScroll={1}
			autoplayDuration={0}
			duration={5000}
			autoplay
			timingFunction="linear"
			dots={false}
			arrows={false}
			swiping={false}
		>
			<li>
				<a href="/products/cosmetic">{$t("page.about.divider.cosmetic")}</a>
			</li>
			<li class="astherisc">*</li>
			<li>
				<a href="/products/ceramic">{$t("page.about.divider.ceramic")}</a>
			</li>
			<li class="astherisc">*</li>
			<li>
				<a href="/products/textile">{$t("page.about.divider.textile")}</a>
			</li>
			<li class="astherisc">*</li>
			<li>
				<a href="/products/cosmetic">{$t("page.about.divider.deter")}</a>
			</li>
			<li class="astherisc">*</li>
		</Carousel>
	</ul>
</div>

<style lang="scss">
	#divider {
		height: 6.25rem;
		background: #faeae9;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 115.5%;
		margin: 6.25rem 0 6.25rem -10%;
		max-width: calc(100vw + 5%);
		& > ul {
			display: flex;
			justify-content: space-around;
			width: 100%;
			align-items: center;
			height: 6.25rem;
			& li {
				font-size: 2.25rem;
				font-weight: 600;
				display: flex;
				align-items: center;
				justify-content: center;
				&.astherisc {
					font-size: 8.125rem;
					line-height: 1;
					height: 4.375rem;
					margin: 1.875rem 0 -1.25rem 0;
				}
				& > a {
					font-size: 2.25rem;
					font-weight: 600;
					text-transform: uppercase;
					transition: all ease 1s;
					&:hover {
						transform: translateY(-15px);
					}
				}
			}
		}
	}
</style>
