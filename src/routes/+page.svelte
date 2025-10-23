<script lang="ts">
	import Header from '$lib/components/header';
	import { ArrowUp, Bookmark } from '$lib/components/icons';
	import Button from '$lib/components/ui/button';
	import { CardAction } from '$lib/components/ui/card';
	import ProductCard from '$lib/features/products/components/product-card.svelte';
	import { products } from '$lib/features/products/products.data';
	import { getCartContext } from '$lib/features/cart/cart.store.svelte';
	import { CartFooter, CartHeader, CartItem } from '$lib/features/cart/components';

	const cart = getCartContext();

	function handleAdd(product: (typeof products)[0]) {
		cart.addItem(product);
	}
</script>

<main class="grid min-h-svh md:grid-cols-[1fr_234px]">
	<section class="flex flex-col">
		<Header />
		<div class="flex flex-1 flex-col justify-between bg-card p-3">
			<ul class="flex flex-wrap gap-3">
				{#each products as product}
					<ProductCard as="li" {product}>
						<CardAction
							onclick={() => handleAdd(product)}
							aria-label={product.type === 'entity' ? 'Add to cart' : 'View details'}
						/>
					</ProductCard>
				{/each}
			</ul>
			<footer class="flex gap-3 md:hidden">
				<Button class="flex-1" size="lg" variant="muted"><Bookmark /> Save</Button>
				<Button class="flex-1" size="lg"><ArrowUp /> Pay</Button>
			</footer>
		</div>
	</section>
	<aside class="hidden flex-col justify-between gap-3 py-3 md:flex">
		<div class="flex flex-col gap-3">
			<CartHeader />
			{#if cart.items.length === 0}
				<div class="flex flex-col gap-1 px-3">
					<h3 class="text-center text-sm font-medium">Your cart is empty</h3>
					<p class="text-center text-xs text-neutral">Add some products to get started</p>
				</div>
			{:else}
				<ul class="flex flex-col gap-2.5 px-3">
					{#each cart.items as item}
						<CartItem product={item.product} quantity={item.quantity} />
					{/each}
				</ul>
			{/if}
		</div>
		<CartFooter />
	</aside>
</main>
