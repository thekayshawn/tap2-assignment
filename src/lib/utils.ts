import type { HTMLAttributes } from 'svelte/elements';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type UiComponentProps<
	T extends HTMLElement = HTMLElement,
	U extends HTMLElement = HTMLElement
> = HTMLAttributes<T> & {
	as?: keyof HTMLElementTagNameMap;
	ref?: U | null;
};
