export interface StockUser {
	id: string;
	name: string;
	stock: string;
	initial_price: number;
	price: number;
	percent_change: number;
}

export interface StockData {
	users: StockUser[];
}
