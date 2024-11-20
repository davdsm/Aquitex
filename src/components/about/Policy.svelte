<script lang="ts">
	import { fly } from 'svelte/transition';
	import { t } from '$lib/i18n/i18n';
	import Video from '../layout/Video.svelte';
	let sy: number = $state(0);
	let videoOpen: boolean = $state(false);

	const openVideo = () => {
		videoOpen = true;
	};

	const closeVideo = () => {
		videoOpen = false;
	};
</script>

<svelte:window bind:scrollY={sy} />

<div id="policy">
	<div id="image" style="transform: translate(0,{-sy * 0.06}px)">
		<div class="card-container">
			<div class="card">
				<div class="header">
					<span>Aquitex</span>
					<a aria-label="link" href="/contacts">
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
					</a>
				</div>
				<div class="video">
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<svg
						aria-label="open-video"
						role="button"
						tabindex="0"
						onclick={openVideo}
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
				</div>
			</div>
		</div>
	</div>
	<div class="info">
		<div class="intro">
			<span in:fly={{ duration: 300, delay: 1000, y: 20 }}>
				{$t('policy')}
			</span>
			<h2 in:fly={{ duration: 300, delay: 1100, y: 20 }}>{$t('page.about.policy.title')}</h2>
		</div>
		<p class="text">
			{$t('page.about.policy.text')}
		</p>
		<div class="numbers">
			<div class="number">
				<span>2</span>
				<p class="text">{$t('labs')}</p>
			</div>
			<div class="number">
				<span>20+</span>
				<p class="text">{$t('products')} Aquitex</p>
			</div>
		</div>
		<div class="buttons">
			<a href="/contacts" in:fly={{ duration: 300, delay: 600, y: 20 }}>{$t('menu.contacts')}</a>
			<a
				aria-label="icon"
				href="/products"
				class="wicon"
				in:fly={{ duration: 300, delay: 700, y: 20 }}
			>
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
	{#if videoOpen}
		<Video close={closeVideo} />
	{/if}
</div>

<style lang="scss">
	#policy {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
		border-bottom: 1px solid #ebebeb;
		padding-bottom: 10rem;
		@media only screen and (max-width: 992px) {
			flex-flow: column;
		}
		& > div {
			width: 48%;
			@media only screen and (max-width: 992px) {
				width: 100%;
			}
			&.info {
				text-align: left;
				& > .intro {
					& > h2 {
						width: 100%;
						max-width: unset;
					}
				}
				& > .numbers {
					display: flex;
					justify-content: flex-start;
					align-items: flex-start;
					& > .number {
						margin: 1.875rem 0;
						margin-right: 3.75rem;
						& > span {
							font-size: 3rem;
							font-weight: 600;
						}
						& > p {
							font-size: 1.125rem;
							font-weight: 400;
						}
					}
				}
				& > .buttons {
					margin: 1.875rem 0 0 0;
					display: flex;
					justify-content: left;
					align-items: center;
					width: 50%;

					@media only screen and (max-width: 992px) {
						width: 80%;
						justify-content: left;
					}

					& > a {
						background: #d14338;
						padding: 1.25rem 1.875rem;
						color: #fff;
						font-size: 1.25rem;
						font-weight: 600;
						border-radius: 3.125rem;
						width: 41%;
						text-align: center;
						transition: all ease 0.2s;
						@media only screen and (max-width: 992px) {
							width: auto;
						}
						&:hover {
							transform: translateY(-5px);
							box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
						}
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
			&#image {
				width: 40%;
				height: 600px;
				border-radius: 30px;
				background: url('/about/policy.jpg') center center no-repeat;
				background-size: cover;
				position: relative;
				margin-top: 80px;

				@media only screen and (max-width: 992px) {
					width: 100%;
					height: 260px;
					background: none;
				}

				& > .card-container {
					position: absolute;
					bottom: 0;
					right: 0;
					width: 390px;
					height: 312px;
					background: white;
					border-top-left-radius: 30px;
					display: flex;
					justify-content: flex-end;
					align-items: flex-end;

					@media only screen and (max-width: 992px) {
						justify-content: center;
						align-items: center;
						width: 100%;
					}

					& > .card {
						width: 303px;
						height: 228px;
						background: #d14338;
						border-radius: 30px;
						margin: 0;
						padding: 30px;
						& > .header {
							display: flex;
							justify-content: space-between;
							margin-bottom: 20px;

							& > span {
								font-size: 28px;
								color: white;
							}
							& > a {
								transition: all ease 1s;
								&:hover {
									transform: translateY(-5px);
									rotate: 20deg;
								}
								& > svg {
									width: 18px;
									height: 18px;
									padding: 10px;
									background: white;
									border-radius: 100%;
								}
							}
						}
						& > .video {
							background: url('/about/video.jpg') center center no-repeat;
							background-size: cover;
							width: 100%;
							height: 74%;
							border-radius: 30px;
							display: flex;
							justify-content: center;
							align-items: center;
							&::after {
								content: url('/helpers/small-corner.svg');
								position: absolute;
								top: -2.1875rem;
								right: 0;
								transition: all ease 0.5s;
								opacity: 1;
								width: 35px;
								height: 35px;
								z-index: 2;
								@media only screen and (max-width: 992px) {
									top: -4.387rem;
								}
							}
							&::before {
								content: url('/helpers/small-corner.svg');
								position: absolute;
								bottom: 0;
								left: -2.1875rem;
								transition: all ease 0.5s;
								opacity: 1;
								width: 35px;
								height: 35px;
								z-index: 2;
								@media only screen and (max-width: 992px) {
									left: -4.387rem;
								}
							}
							& > svg {
								width: 26px;
								height: 26px;
								padding: 20px 20px 20px 23px;
								background: #d14338;
								border-radius: 100%;
								color: white;
								cursor: pointer;
								transition: all ease 1s;
								&:hover {
									rotate: -14deg;
									transform: translateY(-15px);
								}
							}
						}
					}
				}
			}
		}
	}
</style>
