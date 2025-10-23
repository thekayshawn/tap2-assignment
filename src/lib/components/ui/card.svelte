<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import { tv } from 'tailwind-variants';
	import type { UiComponentProps } from '$lib/utils';

	const cardVariants = tv({
		base: 'aspect-square rounded-2xl flex flex-col p-2 md:p-3 overflow-hidden [&_svg]:size-5 bg-card text-card-foreground relative isolate',
		slots: {
			content:
				'flex-1 flex flex-col gap-1 justify-between md:flex-auto md:self-end md:flex-row md:justify-start md:items-center',
			indicator: 'shrink-0',
			header: 'flex items-center gap-1',
			title: 'text-sm flex-1 font-medium',
			description: 'sr-only',
			trail: 'text-xs font-semibold shrink-0'
		}
	});

	export type CardProps = UiComponentProps & {
		title: string;
		description: string;
		indicator?: Snippet<[{ class: string }]>;
		trail?: Snippet<[{ class: string }]>;
	};
</script>

<script lang="ts">
	let {
		id: idName,
		as = 'article',
		ref = $bindable(null),
		class: className,
		title,
		description,
		indicator,
		trail,
		...props
	}: CardProps = $props();

	const variants = cardVariants();

	const uid = $props.id();
	const id = idName ?? uid;

	const titleId = `${id}-title`;
	const descriptionId = `${id}-description`;
</script>

<svelte:element
	this={as}
	bind:this={ref}
	{id}
	class={[variants.base(), className]}
	aria-labelledby={titleId}
	aria-describedby={descriptionId}
	{...props}
>
	<div class={variants.content()}>
		{@render indicator?.({ class: variants.indicator() })}
		<header class={variants.header()}>
			<h3 id={titleId} class={variants.title()}>{title}</h3>
			<p id={descriptionId} class={variants.description()}>{description}</p>
			{@render trail?.({ class: variants.trail() })}
		</header>
	</div>
</svelte:element>
