import { error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET = (({ url }) => {
	return new Response(JSON.stringify({
		version: 'v1',
		author: 'Nate Fabian',
		application: 'dinDB'
	}));
}) satisfies RequestHandler;
