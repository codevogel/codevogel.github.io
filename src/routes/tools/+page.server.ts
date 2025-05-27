import type { Post } from '$lib/model';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    const response = await fetch('/api/posts');
    let posts: Post[] = await response.json();
    posts = posts.filter((post) => post.category === 'tool');
    return { posts }; 
}
