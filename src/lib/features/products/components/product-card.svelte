<script lang="ts" module>
	export type ProductCardProps = Omit<
		CardProps,
		'title' | 'description' | 'indicator' | 'trail'
	> & { product: Product };
</script>

<script lang="ts">
	import Card, { type CardProps } from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
	import type { Product } from '../products.data';

	const { class: className, product, children, ...props }: ProductCardProps = $props();
</script>

<Card
	title={product.name}
	class={cn('aspect-square w-[120px] md:w-[150px]', product.className, className)}
	description={product.description}
	{...props}
>
	{#snippet indicator(props)}
		{#if product.indicator}
			<product.indicator {...props} />
		{/if}
	{/snippet}

	{#snippet trail(props)}
		{#if product.trail}
			{#if typeof product.trail === 'string'}
				<span {...props}>{product.trail}</span>
			{:else}
				<product.trail {...props} />
			{/if}
		{/if}
	{/snippet}

	{#if product.image}
		<div
			class="absolute inset-0 isolate -z-10 overflow-hidden rounded-2xl before:absolute before:inset-0 before:z-10 before:bg-linear-to-b before:from-transparent before:to-foreground/70"
		>
			<img
				src={product.image}
				alt={product.name}
				class="-z-10 h-full w-full origin-top-left scale-110 object-cover object-top-left md:origin-center md:scale-100"
			/>
		</div>
	{/if}

	{@render children?.()}
</Card>
