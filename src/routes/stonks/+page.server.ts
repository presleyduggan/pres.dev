import { STOCK_API } from '$env/static/private';
import { fetchStock } from '$lib/utils.js';
import { doStockCalcs } from '$lib/utils.js';
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

	// Create an array of promises for fetching stock data
	const stockPromises = users.map((user) => fetchStock(user.stock));

	// Wait for all stock data requests to complete
	const stockData = await Promise.all(stockPromises);

	// Calculate the percent change for each user
	users.forEach((user, index) => {
		const value = stockData[index];
		console.log(value);
		const initialPrice = user.initial_price;
		const stockPrice = value.price;

		//if (initialPrice !== 0) {
		user.percent_change = ((stockPrice - initialPrice) / initialPrice) * 100;
		// Round the percent change to two decimal points
		user.percent_change = parseFloat(user.percent_change.toFixed(2));
		user.price = parseFloat(value.price.toFixed(2));
		//} else {
		//  user.percent_change = 0; // or set to some other appropriate value
		// }
	});

	return {
		users: users
	};
}

/* export async function load({ locals }) {
	const users: StockUser[] = await locals.pb
		.collection('stocks')
		.getFullList<StockUser>({ sort: 'name' });

	return {
		//users: doStockCalcs(users)
		old: fetchOldStock()
	};
} */

/* export async function load(event) {
	let x = 3;
	x = "hello";
	return {
		message: "hello"
	};
} */
