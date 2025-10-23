<script lang="ts">
	import { ArrowRight, Bookmark, Pencil } from '$lib/components/icons';
	import Button, { IconButton } from '$lib/components/ui/button';
	import { getCartContext } from '../cart.store.svelte';

	const cart = getCartContext();

	const totalPrice = $derived(cart.getTotalPrice());
	const totalItems = $derived(cart.getTotalItems());
	const isEmpty = $derived(totalItems === 0);
</script>

<footer class="flex flex-col gap-3">
	<div class="flex items-center justify-between gap-3 border-b px-3">
		<IconButton color="secondary" variant="ghost" aria-label="Edit">
			<Pencil />
		</IconButton>
		<span class="text-sm font-medium" aria-label="Total price">
			€{totalPrice}
		</span>
	</div>

	<div class="flex gap-3 px-3">
		<Button disabled={isEmpty} variant="ghost" class="flex-1">
			<Bookmark /> Save
		</Button>
		<Button disabled={isEmpty} class="flex-1">
			<ArrowRight /> Pay
		</Button>
	</div>
</footer>
