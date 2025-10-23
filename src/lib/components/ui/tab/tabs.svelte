<script lang="ts">
	import { cn, type UiComponentProps } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	export type TabsProps = UiComponentProps<HTMLAttributes<HTMLDivElement>>;

	let {
		as = 'div',
		ref = $bindable(null),
		class: className,
		children,
		...props
	}: TabsProps = $props();
</script>

<svelte:element
	this={as}
	bind:this={ref}
	class={cn('flex gap-[62px] overflow-x-auto', className)}
	{...props}
>
	{@render children?.()}
</svelte:element>
