<script lang="ts">
	import type { Product } from '$lib/features/products/products.data';
	import { getCart } from '../cart.svelte';

	const {
		product,
		quantity
	}: {
		product: Product;
		quantity: number;
	} = $props();

	const cart = getCart();

	function increment() {
		cart.updateQuantity(product.id, quantity + 1);
	}

	function decrement() {
		cart.updateQuantity(product.id, quantity - 1);
	}
</script>

<li class="flex items-center gap-2 p-3">
	<p class="shrink-0 text-sm font-medium text-neutral" aria-label="Quantity">x{quantity}</p>
	<h3 class="flex-1 text-sm font-medium">{product.name}</h3>
	<span class="shrink-0 text-sm font-medium" aria-label="Price">{product.trail}</span>
</li>
