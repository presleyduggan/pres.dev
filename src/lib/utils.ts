import { STOCK_API } from "$env/static/private";

interface Json {
	[x: string]: string | number | boolean | Date | Json | JsonArray;
}

interface JsonArray extends Array<string | number | boolean | Date | Json | JsonArray> { }

export const serializeNonPOJOS = (obj: Json) => {
	return structuredClone(obj); // need node 17+
	//return JSON.parse(JSON.stringify(obj));
};

export const fetchStock = async (ticker: string) => {
    console.log('starting '+ ticker + " " + Date.now())
    return await fetch(STOCK_API, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		body: JSON.stringify({ticker})
	}).then((res) => res.json());
}