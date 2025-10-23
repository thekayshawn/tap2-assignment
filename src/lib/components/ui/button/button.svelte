<script lang="ts" module>
	import { cn, type UiComponentProps } from '$lib/utils';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { VariantProps } from 'tailwind-variants';
	import { tv } from 'tailwind-variants';

	export const buttonVariants = tv({
		base: 'inline-flex items-center justify-center gap-2 font-medium text-sm rounded-full interactive',
		variants: {
			size: {
				default: 'h-11 px-5',
				lg: 'h-13 px-6'
			},
			color: {
				default: '',
				secondary: '',
				destructive: ''
			},
			variant: {
				default: '',
				muted: '',
				ghost: ''
			}
		},
		compoundVariants: [
			// Default (Primary) color variants
			{
				color: 'default',
				variant: 'default',
				class: 'bg-primary text-primary-foreground'
			},
			{
				color: 'default',
				variant: 'muted',
				class: 'bg-primary-muted text-primary'
			},
			{
				color: 'default',
				variant: 'ghost',
				class:
					'bg-transparent text-primary enabled:hover:bg-primary-muted enabled:active:bg-primary-muted'
			},
			// Secondary color variants
			{
				color: 'secondary',
				variant: 'default',
				class: 'bg-secondary text-secondary-foreground'
			},
			{
				color: 'secondary',
				variant: 'muted',
				class: 'bg-secondary-muted text-secondary'
			},
			{
				color: 'secondary',
				variant: 'ghost',
				class:
					'bg-transparent text-secondary enabled:hover:bg-secondary-muted enabled:active:bg-secondary-muted'
			},
			// Destructive color variants
			{
				color: 'destructive',
				variant: 'default',
				class: 'bg-destructive text-destructive-foreground'
			},
			{
				color: 'destructive',
				variant: 'muted',
				class: 'bg-destructive-muted text-destructive'
			},
			{
				color: 'destructive',
				variant: 'ghost',
				class:
					'bg-transparent text-destructive enabled:hover:bg-destructive-muted enabled:active:bg-destructive-muted'
			}
		],
		defaultVariants: {
			size: 'default',
			color: 'default',
			variant: 'default'
		}
	});

	export type ButtonVariants = VariantProps<typeof buttonVariants>;

	export type ButtonProps = ButtonVariants & UiComponentProps<HTMLButtonAttributes>;
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
	}: ButtonProps = $props();

	const variants = buttonVariants({ size, color, variant });
</script>

<svelte:element this={as} bind:this={ref} class={cn(variants, className)} {...props}>
	{@render children?.()}
</svelte:element>
