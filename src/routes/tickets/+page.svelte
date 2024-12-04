<script>
	import Image from '../../components/contacts/Image.svelte';
	import Form from '../../components/tickets/Form.svelte';
	import Contacts from '../../components/contacts/Contacts.svelte';
</script>

<div id="contacts">
	<div>
		<!--Image imageLabel="Contactos Aquitex" imageUrl="/event/image.jpg" /-->
		<Form />
	</div>

	<Contacts />
</div>

<style lang="scss">
	#contacts {
		margin: 3rem auto;

		& > div {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 3%;
			background: #f5f5f5;
			border-radius: 1.875rem;
			flex-wrap: wrap;
		}
	}
</style>
