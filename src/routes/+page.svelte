<script>
	import { fly } from 'svelte/transition';
</script>

<div id="home" out:fly={{ duration: 300, y: 20 }}>
	<div id="intro">
		<div class="left">
			<h1 in:fly={{ duration: 300, delay: 400, y: 20 }}>Inovação que transforma a sua indústria</h1>
		</div>
		<div class="right">
			<p class="text" in:fly={{ duration: 300, delay: 500, y: 20 }}>
				Mais de cinco décadas de experiência na criação de soluções químicas de alto desempenho.
			</p>
			<div class="buttons">
				<a href="/about" in:fly={{ duration: 300, delay: 600, y: 20 }}>Saber Mais</a>
				<a href="/about" in:fly={{ duration: 300, delay: 630, y: 20 }} class="wicon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#home {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		& > #intro {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			text-align: left;
			flex-wrap: wrap;
			& > .left {
				width: 60%;
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				margin: 0;

				@media only screen and (max-width: 992px) {
					width: 100%;
					text-align: center;
				}

				& > h1 {
					font-size: 5.9375rem;
					font-weight: 600;
					letter-spacing: -1.42px;
					line-height: 6.5rem;
				}
			}
			& > .right {
				width: 30%;
				margin: 0;

				@media only screen and (max-width: 992px) {
					margin-top: 40px;
					width: 100%;
					text-align: center;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-wrap: wrap;
				}

				& > p {
				}
				& > .buttons {
					margin: 30px 0 0 0;
					display: flex;
					justify-content: left;
					align-items: center;

					@media only screen and (max-width: 992px) {
						width: 60%;
						display: flex;
						justify-content: center;
					}

					& > a {
						background: #d14338;
						padding: 1.25rem 1.875rem;
						color: #fff;
						font-size: 1.25rem;
						font-weight: 600;
						border-radius: 50px;
						width: 31%;
						text-align: center;
						&.wicon {
							padding: 1.25rem;
							width: 1.66666667rem;
							height: 1.66666667rem;
							display: flex;
							justify-content: center;
							align-items: center;
						}
						& > svg {
							width: 1.5rem;
						}
					}
				}
			}
		}
	}
</style>
