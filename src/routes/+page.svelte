<script>
	import { Button, IconButton } from '$lib/components/button';
	import { ArrowLeft, ArrowRight, Flame } from '$lib/components/icons';
	import Card from '$lib/components/ui/card.svelte';
</script>

<div class="flex flex-col gap-4 p-10">
	<div class="flex justify-start gap-4">
		<Button><ArrowRight /> Left</Button>
		<Button variant="ghost"><Flame /> Hot</Button>
		<Button variant="muted">Right <ArrowRight /></Button>
	</div>
	<div class="flex justify-start gap-4">
		<Button size="lg" color="secondary"><ArrowRight /> Left</Button>
		<Button size="lg" color="secondary" variant="ghost"><Flame /> Hot</Button>
		<Button size="lg" color="secondary" variant="muted">Right <ArrowRight /></Button>
	</div>
	<div class="flex justify-start gap-4">
		<Button color="destructive"><ArrowRight /> Left</Button>
		<Button color="destructive" variant="ghost"><Flame /> Hot</Button>
		<Button color="destructive" variant="muted">Right <ArrowRight /></Button>
	</div>
	<div class="flex justify-start gap-4">
		<IconButton><ArrowRight /></IconButton>
		<IconButton variant="ghost"><Flame /></IconButton>
		<IconButton variant="muted"><ArrowRight /></IconButton>
	</div>
	<div class="flex justify-start gap-4">
		<IconButton color="secondary"><ArrowRight /></IconButton>
		<IconButton color="secondary" variant="ghost"><Flame /></IconButton>
		<IconButton color="secondary" variant="muted"><ArrowRight /></IconButton>
	</div>
	<div class="flex justify-start gap-4">
		<IconButton color="destructive"><ArrowRight /></IconButton>
		<IconButton color="destructive" variant="ghost"><Flame /></IconButton>
		<IconButton color="destructive" variant="muted"><ArrowRight /></IconButton>
	</div>
</div>

<Card title="Coffee" description="A delicious coffee">
	{#snippet indicator(props)}
		<ArrowLeft {...props} />
	{/snippet}

	{#snippet trail(props)}
		<ArrowRight {...props} />
	{/snippet}
</Card>
