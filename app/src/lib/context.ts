import { createContext } from "svelte";

export const [getScrollContainerContext, setScrollContainerContext] = createContext<() => HTMLElement | undefined>();
export const [getContentContainerContext, setContentContainerContext] = createContext<() => HTMLElement | undefined>();
