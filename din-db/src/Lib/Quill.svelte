<script lang="ts">
	import { onMount } from 'svelte';

	let qui: HTMLDivElement;
	onMount(()=>{
		let quill = new Quill(qui, {
			theme: "snow"
		})
	})
</script>

<style>

	.FixQuill {
		height: 100%;
		padding-bottom: 1em;
	}

	.FixQuill :global(.ql-container) {
		height: calc(100% - 61px);
	}
	/* TODO Fix all the quill styles to align to pico css */
	.FixQuill :global(.ql-snow .ql-picker) {
		color: #444 !important;
		font-size: 14px !important;
		font-weight: 500 !important;
	}

	.FixQuill :global(.ql-picker-label) {
		padding: unset;
	}
</style>

<div class="FixQuill">
	<div bind:this={qui} />
</div>