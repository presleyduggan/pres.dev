import { STOCK_API } from '$env/static/private';
import type { StockUser } from './types/Types';

interface Json {
	[x: string]: string | number | boolean | Date | Json | JsonArray;
}

interface StockPrice {
	ticker: string;
	price: number;
}

interface JsonArray extends Array<string | number | boolean | Date | Json | JsonArray> {}

export const serializeNonPOJOS = (obj: Json) => {
	return obj;
	//return structuredClone(obj); // need node 17+
	//return JSON.parse(JSON.stringify(obj));
};

export const fetchStock = async (ticker: string) => {
	//console.log('starting ' + ticker + ' ' + Date.now());
	return await fetch(STOCK_API, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({ ticker })
	}).then((res) => res.json());
};

export const fetchSpy = async () => {
	//console.log('starting ' + ticker + ' ' + Date.now());
	return await fetch(STOCK_API + '_spy', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	}).then((res) => res.json());
};

export const fetchOldStock = async () => {
	return await fetch('https://presleyduggan.pythonanywhere.com/api/stonks', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	}).then((res) => res.json());
};

export const doStockCalcs = (users: StockUser[]) => {
	return new Promise(async (resolve, reject) => {
		try {
			await Promise.all(
				users.map(async (user) => {
					const value = await fetchStock(user.stock);
					//console.log(value);
					user.percent_change = ((value.price - user.initial_price) / user.initial_price) * 100;
					// Round the percent change to two decimal points
					user.percent_change = parseFloat(user.percent_change.toFixed(2));
					user.price = parseFloat(value.price.toFixed(2));

					//console.log(user.percent_change);
				})
			);

			users.sort(sortPercent);

			// Resolve the promise with the completed 'users' object after all calculations are done
			resolve(users);
		} catch (error) {
			// Reject the promise if there's an error
			reject(error);
		}
	});
};

export const doStockCalcsStream = async (users: StockUser[]) => {
	await Promise.all(
		users.map(async (user) => {
			const value = await fetchStock(user.stock);
			user.percent_change = ((value.price - user.initial_price) / user.initial_price) * 100;
			user.percent_change = parseFloat(user.percent_change.toFixed(2));
			user.price = parseFloat(value.price.toFixed(2));
		})
	);

	users.sort(sortPercent);

	//console.log(users);

	// Return the completed 'users' object after all calculations are done
	return users;
};

export function sortStonkers(users: StockUser[]) {
	users.sort(sortPercent);
}

export function sortPercent(a: StockUser, b: StockUser): number {
	if (a.percent_change < b.percent_change) {
		return 1 * 1;
	}
	if (a.percent_change > b.percent_change) {
		return -1 * 1;
	} else {
		return 0;
	}
}
