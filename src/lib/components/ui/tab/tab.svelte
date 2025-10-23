<script lang="ts" module>
	import { cn, type UiComponentProps } from '$lib/utils';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { VariantProps } from 'tailwind-variants';
	import { tv } from 'tailwind-variants';

	export const tabVariants = tv({
		base: 'inline-flex items-center justify-center h-10 py-2.5 px-3 text-sm font-medium interactive shrink-0 -outline-offset-2 rounded-lg relative before:absolute before:left-0 before:right-0 before:bottom-0 before:h-0.5',
		variants: {
			active: {
				true: 'text-primary before:bg-primary',
				false: 'text-secondary before:bg-transparent'
			}
		},
		defaultVariants: {
			active: false
		}
	});

	export type TabVariants = VariantProps<typeof tabVariants>;

	export type TabProps = TabVariants & UiComponentProps<HTMLButtonAttributes>;
</script>

<script lang="ts">
	let {
		as = 'button',
		ref = $bindable(null),
		class: className,
		active = false,
		children,
		...props
	}: TabProps = $props();

	const variants = $derived(tabVariants({ active }));
</script>

<svelte:element this={as} bind:this={ref} class={cn(variants, className)} {...props}>
	{@render children?.()}
</svelte:element>
