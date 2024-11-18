<script>
	import { fly } from 'svelte/transition';
</script>

<div class="title">
	<h1 in:fly={{ duration: 300, delay: 400, y: 20 }} out:fly={{ duration: 300, y: 20 }}>
		Sustentabilidade
	</h1>
	<hr in:fly={{ duration: 300, delay: 500, y: 20 }} out:fly={{ duration: 300, y: 20 }}  />
</div>
<img in:fly={{ duration: 300, delay: 600, y: 20 }} out:fly={{ duration: 300, y: 20 }} src="/sustentability/image.png" alt="Sustentabilidade Aquitex" />

<style lang="scss">
	.title {
		& > h1 {
			font-size: 4rem;
			font-weight: 600;
		}
		& > hr {
			width: 20%;
			height: 4px;
			background: #d14338;
			border-radius: 100px;
			margin: 1.875rem auto;
		}
	}

	img {
		width: 60%;
		mix-blend-mode: darken;
		@media only screen and (max-width: 992px) {
			width: 90%;
		}
	}
</style>
