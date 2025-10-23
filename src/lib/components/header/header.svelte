<script>
	import logo from '$lib/assets/logo.svg';
	import Button, { IconButton } from '../ui/button';
	import { AlignJustify, ArrowLeft, Search, SlidersHorizontal } from '../icons';
</script>

<header class="grid px-6 pt-[62px] pb-3 md:grid-cols-[10rem_1fr_10rem] md:items-center md:p-3">
	<!-- Back button -->
	<Button class="hidden place-self-start md:inline-flex" color="secondary" variant="muted">
		<ArrowLeft /> Back
	</Button>
	<!-- Logo -->
	<div class="hidden justify-center md:flex">
		<img alt="Tap2" src={logo} class="h-7 w-auto" />
	</div>
	<!-- Trailing actions -->
	<div class="flex items-center justify-between gap-2 md:justify-end">
		<div class="flex items-center gap-2">
			<IconButton color="secondary" variant="muted" aria-label="Search inventory">
				<Search />
			</IconButton>
			<IconButton color="secondary" variant="muted" aria-label="Apply filters">
				<SlidersHorizontal />
			</IconButton>
		</div>
		<div class="text-right md:hidden">
			<IconButton color="secondary" variant="ghost" aria-label="View cart">
				<AlignJustify />
			</IconButton>
		</div>
	</div>
</header>
