import { getContext, setContext } from 'svelte';
import type { Product } from '../products/products.data';

export type CartItem = {
	product: Product;
	quantity: number;
};

export type CartStore = {
	items: CartItem[];
	addItem: (product: Product) => void;
	removeItem: (productId: string) => void;
	updateQuantity: (productId: string, quantity: number) => void;
	clearCart: () => void;
	getTotalItems: () => number;
	getTotalPrice: () => number;
	isOpen: boolean;
	toggleCart: () => void;
	openCart: () => void;
	closeCart: () => void;
};

const CART_CONTEXT_KEY = Symbol('cart');

export function createCartStore(): CartStore {
	let items = $state<CartItem[]>([]);
	let isOpen = $state(false);

	return {
		get items() {
			return items;
		},
		get isOpen() {
			return isOpen;
		},
		addItem(product: Product) {
			// Only add entities to cart, not groups
			if (product.type !== 'entity') return;

			const existingItemIndex = items.findIndex((item) => item.product.id === product.id);

			if (existingItemIndex > -1) {
				// Item already exists, increase quantity
				items[existingItemIndex].quantity += 1;
			} else {
				// Add new item to cart
				items = [...items, { product, quantity: 1 }];
			}
		},
		removeItem(productId: string) {
			items = items.filter((item) => item.product.id !== productId);
		},
		updateQuantity(productId: string, quantity: number) {
			if (quantity <= 0) {
				this.removeItem(productId);
				return;
			}

			const itemIndex = items.findIndex((item) => item.product.id === productId);
			if (itemIndex > -1) {
				items[itemIndex].quantity = quantity;
			}
		},
		clearCart() {
			items = [];
		},
		getTotalItems() {
			return items.reduce((total, item) => total + item.quantity, 0);
		},
		getTotalPrice() {
			return items.reduce((total, item) => {
				// Extract price from trail (e.g., "€3.5" -> 3.5)
				const priceString = typeof item.product.trail === 'string' ? item.product.trail : '';
				const price = parseFloat(priceString.replace('€', '')) || 0;
				return total + price * item.quantity;
			}, 0);
		},
		toggleCart() {
			isOpen = !isOpen;
		},
		openCart() {
			isOpen = true;
		},
		closeCart() {
			isOpen = false;
		}
	};
}

export function setCartContext(cart: CartStore) {
	setContext(CART_CONTEXT_KEY, cart);
}

export function getCartContext(): CartStore {
	return getContext<CartStore>(CART_CONTEXT_KEY);
}
