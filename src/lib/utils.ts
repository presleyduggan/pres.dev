interface Json {
	[x: string]: string | number | boolean | Date | Json | JsonArray;
}

interface JsonArray extends Array<string | number | boolean | Date | Json | JsonArray> { }

export const serializeNonPOJOS = (obj: Json) => {
	return structuredClone(obj); // need node 17+
	//return JSON.parse(JSON.stringify(obj));
};