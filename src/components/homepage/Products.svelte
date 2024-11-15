<script lang="ts">
	import { t } from '$lib/i18n/i18n';
</script>

<div id="products">
	<div class="intro">
		<span>
			{$t('products')}
		</span>
		<div class="double">
			<h2>{$t('products.title')}</h2>
			<div class="buttons">
				<a href="/about">{$t('products.all')}</a>
				<a aria-label="icon" href="/about" class="wicon">
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
	<div class="products">
		<a href="/products/textile" class="product textile">
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
			<div class="info">
				<span>{$t('labs')}</span>
				<h6>{$t('products.textile')}</h6>
			</div>
		</a>
		<a href="/products/textile" class="product ceramic">
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
			<div class="info">
				<span>{$t('labs')}</span>
				<h6>{$t('products.ceramic')}</h6>
			</div>
		</a>
		<a href="/products/textile" class="product estetic">
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
			<div class="info">
				<span>{$t('labs')}</span>
				<h6>{$t('products.estic')}</h6>
			</div>
		</a>
	</div>
</div>

<style lang="scss">
	#products {
		width: 100%;
		margin-top: 6.25rem;
		& > .intro {
			width: 100%;
			& > .double {
				display: flex;
				justify-content: space-between;
				align-items: center;
				& h2 {
					width: 70%;
					max-width: unset;

					@media only screen and (max-width: 992px) {
						width: 100%;
					}
				}
				& > .buttons {
					margin: 1.875rem 0 0 0;
					display: flex;
					justify-content: right;
					align-items: center;
					width: 30%;

					@media only screen and (max-width: 992px) {
						display: none;
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
		}
		& > .products {
			display: flex;
			justify-content: space-between;
			align-items: center;

			@media only screen and (max-width: 992px) {
				margin-top: 50px;
				flex-flow: column;
			}

			& > a {
				@media only screen and (max-width: 992px) {
					margin-bottom: 30px;
				}
			}
			& > .product {
				height: 31rem;
				border-radius: 1.875rem;
				position: relative;
				display: flex;
				justify-content: center;
				align-items: end;

				&:hover {
					& > .info {
						transform: translateY(0px) translateX(5px);
						opacity: 1;
					}
					&::after {
						transform: translateX(0) translateY(0);
						opacity: 1;
					}
				}
				&::after {
					content: url('/helpers/big-corner.svg');
					position: absolute;
					top: -2px;
					right: 0px;
					z-index: 0;
					transform: translateX(15px) translateY(-15px);
					transition: all ease 0.5s;
					opacity: 0;
				}
				&.textile {
					width: 45%;
					background: url('/homepage/products/textil.png');
					background-position: center center;
					background-size: cover;
					background-repeat: no-repeat;

					@media only screen and (max-width: 992px) {
						width: 100%;
					}
				}
				&.ceramic {
					width: 25%;
					background: url('/homepage/products/ceramic.png');
					background-position: center center;
					background-size: cover;
					background-repeat: no-repeat;

					@media only screen and (max-width: 992px) {
						width: 100%;
						background-position: bottom center;
					}
				}

				&.estetic {
					width: 25%;
					background: url('homepage/products/estetic.png');
					background-position: center center;
					background-size: cover;
					background-repeat: no-repeat;

					@media only screen and (max-width: 992px) {
						width: 100%;
					}
				}
				& > svg {
					background: white;
					width: 1.3125rem;
					position: absolute;
					height: 1.3125rem;
					padding: 0.9375rem;
					border-radius: 100%;
					right: 0.625rem;
					top: 0.625rem;
					z-index: 1;
				}
				& > .info {
					transform: translateY(1.25rem);
					opacity: 0;
					background: #d14338;
					width: calc(90% - 5rem);
					border-radius: 1.875rem;
					padding: 2.5rem;
					color: white;
					text-align: left;
					margin: 0 0 1.25rem 0;
					transition: all ease 0.2s;

					@media only screen and (max-width: 992px) {
						transform: translateY(0px) translateX(5px);
						opacity: 1;
					}

					& > span {
						font-size: 0.75rem;
						width: 30%;
						background: white;
						padding: 0.625rem 1.875rem;
						color: #d14338;
						border-radius: 1.875rem;
						font-weight: 600;
					}
					& > h6 {
						font-size: 1.375rem;
						margin: 1.5625rem 0 0 0;
						font-weight: 600;
					}
				}
			}
		}
	}
</style>
