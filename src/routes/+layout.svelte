<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Design Test - Tap2</title>
	<meta
		name="description"
		content="Nothing special here, just a simple take-home assignment from Tap2"
	/>
</svelte:head>

{@render children?.()}
