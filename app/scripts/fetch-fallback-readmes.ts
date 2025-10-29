import { projects } from '../src/lib/assets/data/projects.ts';
import { existsSync, writeFileSync } from 'fs';

async function main() {
	await fetchFallbackReadmes();
}

async function fetchFallbackReadmes() {
	const projectsToFetch = projects
		.filter((p) => p.readmeURL !== undefined)
		.map((p) => ({ slug: p.slug, url: p.readmeURL, type: p.type }));

	for (const project of projectsToFetch) {
		const res = await fetch(project.url!);
		if (!res.ok) {
			console.error(
				`Failed to fetch README for ${project.slug} (${project.type}): ${res.status} ${res.statusText}`
			);
			continue;
		}
		const readmeContent = await res.text();
		const dirPath = `./static/projects/${project.type}s/${project.slug}`;

		if (!existsSync(dirPath)) {
			throw new Error(`Directory does not exist: ${dirPath}`);
		}

		const filePath = `${dirPath}/README.md`;
		writeFileSync(filePath, readmeContent, 'utf8');
	}
}

await main();
