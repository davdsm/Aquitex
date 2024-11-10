<script lang="ts">
	import { fly } from 'svelte/transition';
	import { t } from '$lib/i18n/i18n';
	let sy: number;

</script>

<svelte:window bind:scrollY={sy}/>

<div id="about">
	<div class="left">
		<div class="intro">
			<span>
				{$t('about')}
			</span>
			<h2>{$t('about.title')}</h2>
			<p class="text">
				{$t('about.text')}
			</p>
		</div>
		<div class="double">
			<div id="ambient">
				<img
					src="/homepage/about/ambient.png"
					width="50px"
					height="50px"
					alt="Gobal Responsability"
				/>
				<h4>{$t('about.ambient.title')}</h4>
				<p class="text">
					{$t('about.ambient.text')}
				</p>
			</div>
			<div id="quality">
				<img
					src="/homepage/about/quality.png"
					width="50px"
					height="50px"
					alt="Inovtion and Quality"
				/>
				<h4>{$t('about.quality.title')}</h4>
				<p class="text">
					{$t('about.quality.text')}
				</p>
			</div>
		</div>
	</div>
	<div class="right">
		<img
			src="/homepage/about/about.jpg"
			width="50%"
			height="100%"
			alt="Inspiring Chemical Solutions"
		/>
		<div style='transform: translate(0,{-sy * 0.05}px)'>
			<h6>{$t('about.headquarters.size')}</h6>
			<p class="text">{$t('about.headquarters.text')}</p>
		</div>
	</div>
</div>

<style lang="scss">
	#about {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		@media only screen and (max-width: 992px) {
			flex-flow: column;
			flex-wrap: wrap;
		}
		& > div {
			margin: 0;
			width: 50%;
			display: flex;
			flex-wrap: wrap;
			@media only screen and (max-width: 992px) {
				flex-flow: column;
				width: 100%;
			}
			&.left {
				& > .intro {
					width: 100%;
					& > h2 {
						width: 100%;
					}
					& > p {
						width: 85%;
					}
				}
				& > .double {
					display: flex;
					justify-content: space-between;
					align-items: flex-start;
					margin: 3.125rem 0 0 0;
					text-align: left;
					& h4 {
						font-size: 1.75rem;
						font-weight: 600;
						width: 70%;
						margin: 1.25rem 0;
					}
					& p {
						width: 70%;
						@media only screen and (max-width: 992px) {
							width: 90%;
						}
					}
				}
			}
			&.right {
				display: flex;
				justify-content: space-around;
				align-items: flex-end;
				height: 100%;
				padding: 0 0 0 0;
				& > div {
					margin: 2.5rem 0 0;
					width: calc(45% - 6.25rem);
					background: #d14338;
					border-radius: 30px;
					padding: 3.125rem;
					position: relative;

					@media only screen and (max-width: 992px) {
						width: calc(100% - 6.25rem);
						margin: 4.5rem 0 0;
					}

					&::after {
						content: url('helpers/big-corner.svg');
						position: absolute;
						top: -2px;
						right: 0px;
					}
					& > h6 {
						font-size: 2.5rem;
						color: white;
						font-weight: 600;
						text-align: left;
					}
					& > p {
						color: #dadada;
						text-align: left;
						margin-top: 1.25rem;
						@media only screen and (max-width: 992px) {
							width: 60%;
						}
					}
				}
				& > img {
					border-radius: 1.875rem;
					height: 100%;
					object-fit: cover;
					width: 45%;
					@media only screen and (max-width: 992px) {
						display: none;
					}
				}
			}
		}
	}
</style>
