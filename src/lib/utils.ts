import type { HTMLAttributes } from 'svelte/elements';

export type UiComponentProps<
	T extends HTMLElement = HTMLElement,
	U extends HTMLElement = HTMLElement
> = HTMLAttributes<T> & {
	as?: keyof HTMLElementTagNameMap;
	ref?: U | null;
};
