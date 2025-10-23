import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type UiComponentProps<T, U extends HTMLElement = HTMLElement> = T & {
	as?: keyof HTMLElementTagNameMap;
	ref?: U | null;
};
