<script>
	import logo from '$lib/assets/logo.svg';
	import Button, { IconButton } from './button';
	import { AlignJustify, ArrowLeft, Search, SlidersHorizontal } from '../icons';
	import Tab, { Tabs } from './tab';

	const tabs = [
		{
			id: 'all',
			label: 'All items'
		},
		{
			id: 'cakes',
			label: 'Cakes and Sweets'
		},
		{
			id: 'breakfast',
			label: 'Breakfast'
		},
		{
			id: 'tea',
			label: 'Tea & Infusion'
		},
		{
			id: 'drinks',
			label: 'Hot Drinks'
		},
		{
			id: 'fresh',
			label: 'Fresh'
		}
	];

	let tabId = $state(tabs[0].id);
</script>

<header class="flex flex-col gap-6 px-4 pt-[62px] md:gap-3 md:p-3 md:pb-0">
	<div class="grid md:grid-cols-[10rem_1fr_10rem] md:items-center">
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
	</div>
	<Tabs class="xl:justify-center">
		{#each tabs as tab (tab.id)}
			<Tab active={tab.id === tabId} onclick={() => (tabId = tab.id)}>{tab.label}</Tab>
		{/each}
	</Tabs>
</header>
