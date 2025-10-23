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
		d="M10 1.66667V3.33334M10 16.6667V18.3333M4.10828 4.10828L5.28328 5.28328M14.7166 14.7166L15.8916 15.8916M1.66667 10H3.33334M16.6667 10H18.3333M5.28328 14.7166L4.10828 15.8916M15.8916 4.10828L14.7166 5.28328M13.3333 10C13.3333 11.841 11.841 13.3333 10 13.3333C8.15906 13.3333 6.66667 11.841 6.66667 10C6.66667 8.15906 8.15906 6.66667 10 6.66667C11.841 6.66667 13.3333 8.15906 13.3333 10Z"
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
