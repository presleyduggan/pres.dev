import { STOCK_API } from '$env/static/private';

interface Json {
	[x: string]: string | number | boolean | Date | Json | JsonArray;
}

interface StockUser {
	id: string;
	name: string;
	stock: string;
	initial_price: number;
	percent_change: number;
}

interface StockPrice {
	ticker: string;
	price: number;
}

interface JsonArray extends Array<string | number | boolean | Date | Json | JsonArray> {}

export const serializeNonPOJOS = (obj: Json) => {
	return structuredClone(obj); // need node 17+
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

					//console.log(user.percent_change);
				})
			);

			// Resolve the promise with the completed 'users' object after all calculations are done
			resolve(users);
		} catch (error) {
			// Reject the promise if there's an error
			reject(error);
		}
	});
};
