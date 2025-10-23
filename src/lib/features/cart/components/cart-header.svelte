<script lang="ts">
	import { EllipsisVertical, X } from '$lib/components/icons';
	import { IconButton } from '$lib/components/ui/button';
	import { getCart } from '../cart.svelte';

	const cart = getCart();

	function handleClear() {
		cart.clearCart();
	}

	const titleId = $props.id();
</script>

<header class="flex items-center justify-between p-3" aria-labelledby={titleId}>
	<IconButton color="destructive" variant="ghost" onclick={handleClear} aria-label="Clear cart">
		<X />
	</IconButton>
	<h3 id={titleId} class="text-sm font-medium">Order #0230</h3>
	<IconButton color="secondary" variant="ghost" aria-label="More options">
		<EllipsisVertical />
	</IconButton>
</header>
