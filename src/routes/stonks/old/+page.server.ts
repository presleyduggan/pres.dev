import { fetchOldStock } from '$lib/utils.js';

interface StockUser {
	id: string;
	name: string;
	stock: string;
	initial_price: number;
	price: number;
	percent_change: number;
}

export async function load({ locals }) {
	const users: StockUser[] = await locals.pb
		.collection('stocks')
		.getFullList<StockUser>({ sort: 'name' });

	return {
		//users: doStockCalcs(users)
		old: fetchOldStock()
	};
}
