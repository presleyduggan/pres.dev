import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals }) => {
		// TODO log the user in
		//console.log('POST');

		//return { error: true, msg: 'Invalid Username or Password was entered' };

		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		try {
			await locals.pb.collection('users').authWithPassword(username, password);
		} catch (err: any) {
			if (err.response?.message) {
				return { error: true, msg: err.response.message };
			} else {
				return { error: true, msg: 'An unknown exception occured. Please try again later.' };
			}
		}

		// everything worked :)
		console.log('valid login for: ' + username);
		throw redirect(303, '/');
	}
};
