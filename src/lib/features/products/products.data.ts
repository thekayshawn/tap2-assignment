import type { Component } from 'svelte';
import { Sun, ArrowRight, CakeSlice, Coffee, Flame, Beer } from '$lib/components/icons';
import coffeeImage from '$lib/assets/coffees/default.png';
import espressoImage from '$lib/assets/coffees/espresso.png';
import cappuccinoImage from '$lib/assets/coffees/cappuccino.png';
import latteImage from '$lib/assets/coffees/latte.png';
import icedCoffeeImage from '$lib/assets/coffees/iced-coffee.png';
import caramelCroquantImage from '$lib/assets/coffees/caramel-croquant.png';
import machaImage from '$lib/assets/coffees/macha.png';

export type Product = {
	id: string;
	type: 'group' | 'entity';
	indicator?: Component;
	name: string;
	description: string;
	image?: string;
	trail?: string | Component;
	className?: string;
};

export const products: Product[] = [
	{
		id: 'breakfast',
		type: 'group',
		indicator: Sun,
		name: 'Breakfast',
		description: 'Breakfast-related products',
		trail: ArrowRight,
		className: 'bg-folder-warning text-folder-warning-foreground'
	},
	{
		id: 'cakes',
		type: 'group',
		indicator: CakeSlice,
		name: 'Cakes and Sweets',
		description: 'Sweeten your taste buds',
		trail: ArrowRight,
		className: 'bg-folder-secondary text-folder-secondary-foreground'
	},
	{
		id: 'chai',
		type: 'group',
		indicator: Coffee,
		name: 'Tea, Chai & Infusion',
		description: 'Wake your mind like never before',
		trail: ArrowRight,
		className: 'bg-folder-success text-folder-success-foreground'
	},
	{
		id: 'drinks',
		type: 'group',
		indicator: Flame,
		name: 'Hot Drinks',
		description: "Show your taste buds who's the boss",
		trail: ArrowRight,
		className: 'bg-folder-destructive text-folder-destructive-foreground'
	},
	{
		id: 'wine',
		type: 'group',
		indicator: Beer,
		name: 'wine',
		description: 'May Tap2 age like fine wine',
		trail: ArrowRight,
		className: 'bg-folder-primary text-folder-primary-foreground'
	},
	{
		id: 'coffee',
		type: 'entity',
		name: 'Coffee',
		description: 'The classic!',
		image: coffeeImage,
		trail: '€3.5',
		className: 'text-card'
	},
	{
		id: 'espresso',
		type: 'entity',
		name: 'Espresso',
		description: 'Nothing wakes you up like a good shot of this',
		image: espressoImage,
		trail: '€2.7',
		className: 'text-card'
	},
	{
		id: 'cappuccino',
		type: 'entity',
		name: 'Capuccino',
		description: 'Why does the design misspell this marvel of a coffe?',
		image: cappuccinoImage,
		trail: '€3.45',
		className: 'text-card hidden md:flex'
	},
	{
		id: 'latte',
		type: 'entity',
		name: 'Latte',
		description: "The tastiest, most classic of 'em all",
		image: latteImage,
		trail: '€3.5',
		className: 'text-card hidden md:flex'
	},
	{
		id: 'iced-coffee',
		type: 'entity',
		name: 'Ice Coffee',
		description: "Shouldn't this be 'Iced' coffee?",
		image: icedCoffeeImage,
		trail: '€4.7',
		className: 'text-card hidden md:flex'
	},
	{
		id: 'caramel-croquant',
		type: 'entity',
		name: 'Caramel Croquant',
		description: 'Def never even heart about this one',
		image: caramelCroquantImage,
		trail: '€5.8',
		className: 'text-card hidden md:flex'
	},
	{
		id: 'macha',
		type: 'entity',
		name: 'Capuccino',
		description: "Yeah, there are 2 cappuccino's, and both are misspelled",
		image: machaImage,
		trail: '€4.8',
		className: 'text-card hidden md:flex'
	}
];
