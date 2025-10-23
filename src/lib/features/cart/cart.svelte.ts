import { getContext, setContext } from 'svelte';
import type { Product } from '../products/products.data';

export type CartItem = {
	product: Product;
	quantity: number;
};

export type Cart = {
	items: CartItem[];
	addItem: (product: Product) => void;
	removeItem: (productId: string) => void;
	updateQuantity: (productId: string, quantity: number) => void;
	clearCart: () => void;
	getTotalItems: () => number;
	getTotalPrice: () => number;
};

const cartKey = Symbol('cart');

export function createCart(): Cart {
	let items = $state<CartItem[]>([]);

	return {
		get items() {
			return items;
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
			const total = items.reduce((total, item) => {
				// Extract price from trail (e.g., "€3.5" -> 3.5)
				const priceString = typeof item.product.trail === 'string' ? item.product.trail : '';
				const price = parseFloat(priceString.replace('€', '')) || 0;
				return total + price * item.quantity;
			}, 0);

			return Number(total.toFixed(2));
		}
	};
}

export function setCart(cart: Cart) {
	setContext(cartKey, cart);
}

export function getCart(): Cart {
	return getContext<Cart>(cartKey);
}
