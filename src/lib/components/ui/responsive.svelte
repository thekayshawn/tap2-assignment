<script lang="ts">
	import { browser } from '$app/environment';
	import type { Snippet } from 'svelte';

	export type ResponsiveProps = {
		children: Snippet;
		sm?: Snippet;
		md?: Snippet;
		lg?: Snippet;
		xl?: Snippet;
		['2xl']?: Snippet;
	};

	let { children, sm, md, lg, xl, '2xl': xxl }: ResponsiveProps = $props();

	// Get breakpoints from computed styles (Tailwind default breakpoints)
	// These match Tailwind v4 defaults: sm=640px, md=768px, lg=1024px, xl=1280px, 2xl=1536px
	function getBreakpoints() {
		if (!browser) {
			return {
				sm: 640,
				md: 768,
				lg: 1024,
				xl: 1280,
				'2xl': 1536
			};
		}

		// Try to get breakpoints from CSS custom properties if defined
		const root = document.documentElement;
		const getVar = (name: string, fallback: number) => {
			const value = getComputedStyle(root).getPropertyValue(`--breakpoint-${name}`).trim();
			return value ? parseInt(value) : fallback;
		};

		return {
			sm: getVar('sm', 640),
			md: getVar('md', 768),
			lg: getVar('lg', 1024),
			xl: getVar('xl', 1280),
			'2xl': getVar('2xl', 1536)
		};
	}

	const BREAKPOINTS = getBreakpoints();

	// Current window width
	let windowWidth = $state(0);

	// Determine which breakpoint is active
	const currentBreakpoint = $derived.by(() => {
		if (windowWidth >= BREAKPOINTS['2xl']) return '2xl';
		if (windowWidth >= BREAKPOINTS.xl) return 'xl';
		if (windowWidth >= BREAKPOINTS.lg) return 'lg';
		if (windowWidth >= BREAKPOINTS.md) return 'md';
		if (windowWidth >= BREAKPOINTS.sm) return 'sm';
		return 'mobile';
	});

	// Get the appropriate snippet to render
	const activeSnippet = $derived.by(() => {
		switch (currentBreakpoint) {
			case '2xl':
				return xxl || xl || lg || md || sm || children;
			case 'xl':
				return xl || lg || md || sm || children;
			case 'lg':
				return lg || md || sm || children;
			case 'md':
				return md || sm || children;
			case 'sm':
				return sm || children;
			default:
				return children;
		}
	});

	// Handle window resize
	function handleResize() {
		windowWidth = window.innerWidth;
	}

	// Initialize on mount
	$effect(() => {
		if (typeof window !== 'undefined') {
			windowWidth = window.innerWidth;
			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	});
</script>

{@render activeSnippet?.()}
