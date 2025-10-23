<script>
	import { CartFooter } from '$lib/components/cart';
	import Header from '$lib/components/header';
</script>

<main class="flex min-h-svh flex-col">
	<Header />
	<div class="flex flex-col">
		<CartFooter class="hidden md:flex" />
	</div>
</main>
