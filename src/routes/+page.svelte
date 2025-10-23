<script lang="ts">
	import Header from '$lib/components/header';
	import { ArrowUp, Bookmark } from '$lib/components/icons';
	import Button from '$lib/components/ui/button';
	import { CardAction } from '$lib/components/ui/card';
	import ProductCard from '$lib/features/products/components/product-card.svelte';
	import { products } from '$lib/features/products/products.data';

	// const cart = $state<>
</script>

<main class="flex min-h-svh flex-col">
	<Header />
	<div class="flex flex-1 flex-col justify-between bg-card p-3">
		<ul class="flex flex-wrap gap-3">
			{#each products as product}
				<ProductCard as="li" {product}>
					<CardAction aria-label="View details" />
				</ProductCard>
			{/each}
		</ul>
		<footer class="flex gap-3 md:hidden">
			<Button class="flex-1" size="lg" variant="muted"><Bookmark /> Save</Button>
			<Button class="flex-1" size="lg"><ArrowUp /> Pay</Button>
		</footer>
	</div>
</main>
