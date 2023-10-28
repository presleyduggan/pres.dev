// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		pb: PocketBase; // Pocketbase
		user: PocketBase.authStore.model | undefined;
	}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
