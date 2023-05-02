<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faMoon } from '@fortawesome/free-solid-svg-icons';

	function switchTheme() {
		let root: HTMLElement = document.getElementsByTagName('html')[0];

		let current = root.getAttribute('data-theme')

		if (current == undefined) {
			if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
				root.setAttribute('data-theme', 'light')
			} else {
				root.setAttribute('data-theme', 'dark')
			}
		} else if (current == 'dark') {
			root.setAttribute('data-theme', 'light')
		} else {
			root.setAttribute('data-theme', 'dark')
		}
	}
</script>

<style>
	.navButton {
		padding: 0.4em;
	}
</style>

<nav>
	<ul>
		<li>
			<a href="/">Din-DB</a>
		</li>
	</ul>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/meal">Add</a></li>
		<li><a href="/database">View</a></li>
		<li><a href="/family-info">Family</a></li>
		<li><button class="navButton" on:click={switchTheme}><Fa icon={faMoon} /></button></li>
	</ul>
</nav>