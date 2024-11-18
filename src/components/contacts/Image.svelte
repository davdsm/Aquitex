<script>
	import { fly } from 'svelte/transition';
</script>

<div class="image" in:fly={{ duration: 300, delay: 400, y: 20 }} out:fly={{ duration: 300, y: 20 }}>
	<img src="/contacts/image.jpg" alt="Contactos Aquitex" />
</div>

<style lang="scss">
	.image {
		width: 40%;
		height: 700px;
		@media only screen and (max-width: 992px) {
			display: none;
		}
		& > img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 30px;
		}
	}
</style>
