<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { createCartStore, setCartContext } from '$lib/features/cart/cart.store.svelte';

	let { children } = $props();

	const cart = createCartStore();
	setCartContext(cart);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Design Test - Tap2</title>
	<meta
		name="description"
		content="Nothing special here, just a simple take-home assignment from Tap2"
	/>

	<!-- Inter font -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children?.()}
