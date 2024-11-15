<script lang="ts">
	import { fly } from 'svelte/transition';
	import { t } from '$lib/i18n/i18n';
	let sy: number;

	const openVideo = () => {
		alert('video');
	};
</script>

<svelte:window bind:scrollY={sy} />
<div id="video">
	<div class="three">
		<div class="title" in:fly={{ duration: 300, delay: 1200, y: 20 }}>
			<h2>{$t('page.about.video.title')}</h2>
		</div>
		<div
			class="play"
			in:fly={{ duration: 300, delay: 1100, y: 20 }}
			style="transform: translate(0,{sy * 0.01}px)"
		>
			<button type="button" aria-label="video" onclick={openVideo}
				><svg
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
						d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
					/>
				</svg>
			</button>
		</div>
		<div class="description" in:fly={{ duration: 300, delay: 1400, y: 20 }}>
			<p class="special-text">
				{$t('page.about.video.description-1')}<span class="first"></span>{$t(
					'page.about.video.description-2'
				)}<span class="second"></span>
				{$t('page.about.video.description-3')}
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	#video {
		margin-top: 80vh;

		@media only screen and (max-width: 992px) {
			margin-top: 60vh;
		}

		& > .three {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;

			& > .title {
				width: 40%;

				@media only screen and (max-width: 992px) {
					width: 70%;
				}
				& > h2 {
					text-align: left;
					font-size: 4rem;
					font-weight: 600;
					letter-spacing: -0.96px;

					@media only screen and (max-width: 992px) {
						font-size: 3rem;
					}
				}
			}
			& > .play {
				width: 20%;
				display: flex;
				justify-content: center;
				align-items: center;

				@media only screen and (max-width: 992px) {
					width: 30%;
				}

				& > button {
					width: 4.125rem;
					height: 4.125rem;
					background: #d14338;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 100%;
					transition: all ease 1s;

					@media only screen and (max-width: 992px) {
						width: 5.125rem;
						height: 5.125rem;
					}

					&:hover {
						rotate: -14deg;
						transform: translateY(-15px);
					}
					& > svg {
						width: 28px;
						padding: 0 0 0 3px;
						color: white;
						@media only screen and (max-width: 992px) {
							width: 20px;
						}
					}
				}
			}
			& > .description {
				width: 40%;

				@media only screen and (max-width: 992px) {
					width: 100%;
					margin-top: 20px;
				}

				& > p.special-text {
					font-size: 2.25rem;
					font-weight: 600;
					text-align: left;
					& > span {
						display: inline-block;
						height: 3rem;
						border-radius: 1.5rem;
						background-repeat: no-repeat;
						background-size: cover;
						background-position: center center;
						margin: 0 0 -12px 0;

						@media only screen and (max-width: 992px) {
							margin: 0 0 -5px 0;
						}

						&.first {
							width: 8.125rem;
							background-image: url('/about/bean1.png');
						}
						&.second {
							width: 12rem;
							background-image: url('/about/bean2.png');
						}
					}
				}
			}
		}
	}
</style>
