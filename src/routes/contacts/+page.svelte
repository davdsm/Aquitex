<script>
	import { fly } from 'svelte/transition';
	import Image from '../../components/contacts/Image.svelte';
</script>

<div id="contacts">
	<Image />
	<div class="form"></div>
</div>

<style lang="scss">
	#contacts {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 3rem auto;
		& & > .form {
			width: 50%;
		}
	}
</style>
