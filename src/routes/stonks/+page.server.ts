import { STOCK_API } from '$env/static/private';
import { fetchStock } from '$lib/utils.js';

export async function load({params, locals}) {
	/* let ticker = "SPY";
	console.log(JSON.stringify({ticker}));
	const response = await fetch(STOCK_API, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({ticker})
	});
	let stonkData = await response.json();
	let q = 3;
	let y: number = 4;
	console.log(stonkData); */
	return {
		a: fetchStock("SPY"),
		b: fetchStock("MSFT"),
		c: fetchStock("AAPL"),
		d: fetchStock("LULU"),
		e: fetchStock("VOO"),
		f: fetchStock("GOOGL"),
		g: fetchStock("SPCE"),
		h: fetchStock("TSLA"),
		i: fetchStock("NVDA"),
	};
}


/* export async function load(event) {
	let x = 3;
	x = "hello";
	return {
		message: "hello"
	};
} */