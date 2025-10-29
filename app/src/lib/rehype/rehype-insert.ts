import type { Root, Element, RootContent } from 'hast';

/**
 * Position strategies for where to insert content
 */
export type InsertPosition =
	| { type: 'after'; selector: (node: RootContent, index: number) => boolean }
	| { type: 'before'; selector: (node: RootContent, index: number) => boolean }
	| { type: 'start' } // Beginning of document
	| { type: 'end' }; // End of document

/**
 * Content generator function
 */
export type ContentGenerator<TData> = (data: TData) => Element | Element[] | null | undefined;

/**
 * Options for rehype-insert plugin
 */
export interface RehypeInsertOptions<TData> {
	/**
	 * Where to insert the content
	 * @default { type: 'after', selector: (node) => node.type === 'element' && node.tagName === 'h1' }
	 */
	position?: InsertPosition;

	/**
	 * Function that generates the HAST element(s) to insert
	 */
	content: ContentGenerator<TData>;

	/**
	 * Data to pass to the content generator
	 */
	data?: TData;

	/**
	 * Whether to skip insertion if similar content already exists at the insertion point
	 * Checks if the next/previous node (depending on position) matches the generated content's tagName
	 * @default true
	 */
	skipIfExists?: boolean;
}

/**
 * rehype plugin to insert custom content at a specified location in the document.
 *
 * @example
 * ```ts
 * // Insert blockquote after first h1
 * rehypeInsert({
 *   position: { type: 'after', selector: (node) => node.type === 'element' && node.tagName === 'h1' },
 *   content: (status) => ({
 *     type: 'element',
 *     tagName: 'blockquote',
 *     properties: {},
 *     children: [{ type: 'element', tagName: 'p', properties: {}, children: [{ type: 'text', value: `Status: ${status}` }] }]
 *   }),
 *   data: 'active'
 * })
 *
 * // Insert div at start of document
 * rehypeInsert({
 *   position: { type: 'start' },
 *   content: () => ({ type: 'element', tagName: 'div', properties: { className: ['alert'] }, children: [] })
 * })
 * ```
 */
export default function rehypeInsert<T>(options: RehypeInsertOptions<T>) {
	const {
		position = {
			type: 'after',
			selector: (node) => node.type === 'element' && (node as Element).tagName === 'h1'
		},
		content,
		data,
		skipIfExists = true
	} = options;

	return (tree: Root) => {
		// Generate content
		const generatedContent = content(data as T);
		if (!generatedContent) return;

		// Normalize to array
		const elements = Array.isArray(generatedContent) ? generatedContent : [generatedContent];
		if (elements.length === 0) return;

		// Handle start/end positions
		if (position.type === 'start') {
			// Check if first element already matches
			if (skipIfExists && shouldSkip(tree.children[0], elements[0])) return;
			tree.children.unshift(...elements);
			return;
		}

		if (position.type === 'end') {
			// Check if last element already matches
			if (skipIfExists && shouldSkip(tree.children[tree.children.length - 1], elements[0]))
				return;
			tree.children.push(...elements);
			return;
		}

		// Handle before/after positions with selector
		const idx = tree.children.findIndex((node, i) => position.selector(node, i));
		if (idx === -1) return; // No matching node found

		if (position.type === 'after') {
			// Check if next element already matches
			if (skipIfExists && shouldSkip(tree.children[idx + 1], elements[0])) return;
			tree.children.splice(idx + 1, 0, ...elements);
		} else if (position.type === 'before') {
			// Check if previous element already matches
			if (skipIfExists && shouldSkip(tree.children[idx - 1], elements[0])) return;
			tree.children.splice(idx, 0, ...elements);
		}
	};
}

/**
 * Helper to check if we should skip insertion due to existing similar content
 */
function shouldSkip(existingNode: RootContent | undefined, newElement: Element): boolean {
	if (!existingNode || existingNode.type !== 'element') return false;
	return existingNode.tagName === newElement.tagName;
}

/**
 * Helper to create any element with text content
 */
export function createElement(
	tagName: string,
	text: string,
	properties?: Element['properties']
): Element {
	return {
		type: 'element',
		tagName,
		properties: properties || {},
		children: [{ type: 'text', value: text }]
	};
}

/**
 * Helper to create a blockquote element
 */
export function createBlockquote(text: string): Element {
	return createElement('blockquote', text);
}
