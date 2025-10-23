<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	const props: HTMLAttributes<SVGElement> = $props();
</script>

<svg
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	width="20"
	height="20"
	viewBox="0 0 20 20"
	aria-hidden="true"
	pointer-events="none"
	{...props}
>
	<path
		d="M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333"
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
