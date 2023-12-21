export interface StockUser {
	id: string;
	name: string;
	stock: string;
	initial_price: number;
	price: number;
	percent_change: number;
}

export interface Spy {
	price: number;
	ticker: string;
}

export interface StockData {
	users: StockUser[];
}
