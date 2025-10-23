<script lang="ts" module>
	import type { VariantProps } from 'tailwind-variants';
	import { tv } from 'tailwind-variants';
	import { buttonVariants } from './button.svelte';
	import { cn, type UiComponentProps } from '$lib/utils';

	export const iconButtonVariants = tv({
		extend: buttonVariants,
		variants: {
			size: {
				default: 'size-11 px-0',
				lg: 'size-13 px-0'
			}
		},
		defaultVariants: {
			size: 'default',
			color: 'default',
			variant: 'default'
		}
	});

	export type IconButtonVariants = VariantProps<typeof iconButtonVariants>;

	export type IconButtonProps = IconButtonVariants & UiComponentProps<HTMLButtonElement>;
</script>

<script lang="ts">
	let {
		as = 'button',
		ref = $bindable(null),
		class: className,
		size = 'default',
		color = 'default',
		variant = 'default',
		children,
		...props
	}: IconButtonProps = $props();

	const variants = iconButtonVariants({ size, color, variant });
</script>

<svelte:element this={as} bind:this={ref} class={cn(variants, className)} {...props}>
	{@render children?.()}
</svelte:element>
