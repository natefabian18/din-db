<script>
	import Head from '../Lib/header.svelte'
</script>

<style>
	main {
		width: 100vw;
		height: 100vh;
		padding: 1em;
	}
</style>

<main>
	<Head />
	<slot>No Item Found</slot>
</main>