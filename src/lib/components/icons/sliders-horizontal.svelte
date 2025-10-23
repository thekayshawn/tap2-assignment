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
		d="M17.5 3.33333H11.6667M8.33333 3.33333H2.5M17.5 10H10M6.66667 10H2.5M17.5 16.6667H13.3333M10 16.6667H2.5M11.6667 1.66667V5M6.66667 8.33333V11.6667M13.3333 15V18.3333"
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
