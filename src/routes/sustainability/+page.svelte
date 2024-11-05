<script>
	import { fly } from 'svelte/transition';
</script>

<h1 in:fly={{ duration: 300, delay: 400, y: 20 }} out:fly={{ duration: 300, y: 20 }}>
	Sustainability
</h1>
