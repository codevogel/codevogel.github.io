import type { Root, Element } from 'hast';

/**
 * rehype plugin to insert a project status blockquote right after the top-level header.
 *
 * Usage (already used in the repo):
 * rehypeProjectStatus({ wip: project.wip, abandoned: project.abandoned })
 */
export default function rehypeProjectStatus(
	workStatus: 'active' | 'postponed' | 'icebox' | 'abandoned' | undefined
) {
	return (tree: Root) => {
		console.log(`Inserting project status for workStatus='${workStatus}'`);
		console.log(`Tree: ${tree}`);
		// If nothing to insert, exit early.
		if (workStatus === undefined) return;

		// Find first top-level header (<h1>)
		const idx = tree.children.findIndex(
			(node) => node.type === 'element' && (node as Element).tagName === 'h1'
		);

		if (idx === -1) return; // no H1 found

		// If the next node is already a blockquote, don't duplicate
		const next = tree.children[idx + 1];
		if (next && next.type === 'element' && (next as Element).tagName === 'blockquote') return;

		// Choose message
		let message = '';

		switch (workStatus) {
			case 'abandoned':
				message =
					"🪦 A beloved project has met its end. Though abandoned, I'm keeping it here as a small monument to the ideas it once held. Perhaps one day, [it might rise again](/contact). 🪦";
				break;
			case 'active':
				message =
					'🚧 This project is still under construction. I am currently actively building it, so stay tuned! 🚧';
				break;
			case 'postponed':
				message =
					"⏳ This project is taking a break. It's still on my roadmap, but construction is on hold while I focus on other projects. ⏳";
				break;
			case 'icebox':
				message =
					"🧊 This project is taking a break. It's in the icebox for now, but I hope to revisit it when the time feels right. 🧊";
				break;
			default:
				// no recognized wip status -> do nothing
				return;
		}

		// Construct HAST blockquote -> <blockquote><p>message</p></blockquote>
		const blockquote: Element = {
			type: 'element',
			tagName: 'blockquote',
			properties: {},
			children: [
				{
					type: 'element',
					tagName: 'p',
					properties: {},
					children: [
						{
							type: 'text',
							value: message
						}
					]
				}
			]
		};

		// Insert blockquote right after the h1
		tree.children.splice(idx + 1, 0, blockquote);
	};
}
