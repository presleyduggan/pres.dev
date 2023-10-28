import PocketBase, {RecordService} from 'pocketbase';
import { serializeNonPOJOS } from '$lib/utils';
import { DB_URL } from '$env/static/private';

interface TypedPocketBase extends PocketBase {
	collection(idOrName: string): RecordService
}

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(DB_URL) as TypedPocketBase;
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = serializeNonPOJOS(event.locals.pb.authStore.model);
        console.log("valid");
	} else {
		event.locals.user = undefined;
	}

	if (event.locals?.user) {
		//console.log(event.locals.user);
		//console.log(serializeNonPOJOS(event.locals.user));
	}

	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false })); // TODO: change to true when deploying

	return response;
};
