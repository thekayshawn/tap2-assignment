<script>
	import Header from '$lib/components/header';
	import { ArrowUp, Bookmark } from '$lib/components/icons';
	import Button from '$lib/components/ui/button';
</script>

<main class="flex min-h-svh flex-col">
	<Header />
	<div class="flex flex-1 flex-col bg-card p-3">
		<div class="grid flex-1 grid-cols-3 gap-3"></div>
		<footer class="flex gap-3 md:hidden">
			<Button class="flex-1" size="lg" variant="muted"><Bookmark /> Save</Button>
			<Button class="flex-1" size="lg"><ArrowUp /> Pay</Button>
		</footer>
	</div>
</main>
