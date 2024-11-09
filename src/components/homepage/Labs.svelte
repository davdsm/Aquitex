<script lang="ts">
	import { fly } from 'svelte/transition';
	import { t } from '$lib/i18n/i18n';
</script>

<div id="labs">
	<div class="intro">
		<span in:fly={{ duration: 300, delay: 1000, y: 20 }}>
			{$t('labs')}
		</span>
		<h2 in:fly={{ duration: 300, delay: 1100, y: 20 }}>{$t('labs.subtitle')}</h2>
	</div>
	<div class="labs">
		<div class="lab">
			<img src="/homepage/labs/textil.png" alt="Textile Lab" width="32px" height="32px" />
			<h6>{$t('labs.textile')}</h6>
			<p class="text">
				{$t('labs.textile.text')}
			</p>
			<div class="cta">
				<a href="/labs/textile">
					{$t('know-more')}
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
		</div>
		<div class="lab">
			<img src="/homepage/labs/ceramicc.png" alt="Ceramic Lab" width="32px" height="32px" />
			<h6>{$t('labs.ceramic')}</h6>
			<p class="text">
				{$t('labs.ceramic.text')}
			</p>
			<div class="cta">
				<a href="/labs/ceramic">
					{$t('know-more')}
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
		</div>
	</div>
</div>

<style lang="scss">
	#labs {
		display: flex;
		flex-flow: column;
		margin: 0;
		width: 100%;
		padding: 6.25rem 0;
		& > .labs {
			display: flex;
			justify-content: left;
			align-items: center;
			width: 100%;
			margin: 1.875rem 0 0 0;
			@media only screen and (max-width: 992px) {
				flex-direction: column;
			}
			& > .lab {
				background-color: #ecf4fe;
				padding: 3.125rem;
				border-radius: 1.875rem;
				max-width: 33rem;
				min-width: 28.125rem;
				text-align: left;
				width: 30%;
				margin: 0 1.875rem 0 0;
				@media only screen and (max-width: 992px) {
					margin: 0 0 1.875rem 0;
					width: calc(100% - 6.25rem);
					 max-width: unset;
				}
				& > img {
					width: 2rem;
					height: 2rem;
					object-fit: contain;
				}
				& > h6 {
					font-size: 1.75rem;
					color: #292929;
					font-weight: 600;
					margin: 1.25rem 0;
				}
				& > p {
					width: 100%;
					height: 8.125rem;
				}
				& > .cta {
					text-align: right;
					margin: 2.5rem 0 0;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					& > a {
						display: flex;
						justify-content: flex-end;
						align-items: center;
						background: none;
						padding: 0;
						border: 0;
						font-size: 1.25rem;
						color: #292929;
						font-weight: 500;
						&:hover {
							& > svg {
								transform: rotate(20deg);
							}
						}
						& > svg {
							margin: 0 0 0 0.625rem;
							width: 1.5625rem;
							height: 1.5625rem;
							transition: all ease 0.2s;
						}
					}
				}
			}
		}
	}
</style>
