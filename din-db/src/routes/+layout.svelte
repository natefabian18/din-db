<script lang="ts">
	import Header from '../Lib/Header.svelte';
	import Footer from '../Lib/Footer.svelte';

	import "@picocss/pico";
</script>

<style>
	.MainContainer {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex-grow: 1;
	}
</style>

<div class="container-fluid MainContainer">
	<header>
		<Header />
	</header>
	<main>
		<slot>MainComponent Not Found</slot>
	</main>
	<footer>
		<Footer />
	</footer>
</div>