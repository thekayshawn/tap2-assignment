<script lang="ts">
	import Header from '$lib/components/ui/header.svelte';
	import { ArrowUp, Bookmark } from '$lib/components/icons';
	import Button from '$lib/components/ui/button';
	import { CardAction } from '$lib/components/ui/card';
	import ProductCard from '$lib/features/products/components/product-card.svelte';
	import { products } from '$lib/features/products/products.data';
	import { getCart } from '$lib/features/cart';
	import { CartFooter, CartHeader, CartItem } from '$lib/features/cart/components';

	const cart = getCart();

	const totalItems = $derived(cart.getTotalItems());
	const isEmpty = $derived(totalItems === 0);
</script>

<main class="grid min-h-svh md:grid-cols-[1fr_234px]">
	<section class="flex flex-col">
		<Header />
		<div class="flex flex-1 flex-col justify-between bg-card p-3">
			<ul class="flex flex-wrap gap-3">
				{#each products as product}
					<ProductCard as="li" {product}>
						<CardAction
							onclick={() => cart.addItem(product)}
							aria-label={product.type === 'entity' ? 'Add to cart' : 'View details'}
						/>
					</ProductCard>
				{/each}
			</ul>
			<footer class="flex gap-3 md:hidden">
				<Button disabled={isEmpty} class="flex-1" size="lg" variant="muted">
					<Bookmark /> Save
				</Button>
				<Button disabled={isEmpty} class="flex-1" size="lg">
					<ArrowUp /> Pay
				</Button>
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
