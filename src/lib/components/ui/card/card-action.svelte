<script lang="ts">
	import { cn, type UiComponentProps } from '$lib/utils';

	let {
		as = 'button',
		ref = $bindable(null),
		class: className,
		children,
		...props
	}: UiComponentProps<HTMLButtonElement> = $props();
</script>

<svelte:element
	this={as}
	bind:this={ref}
	class={cn('interactive-overlay absolute inset-0 rounded-2xl', className)}
	{...props}
>
	{@render children?.()}
</svelte:element>
