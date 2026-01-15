export interface Product {
	current: number;
	index: number;
	limit: number;
	name: string;
	price: string;
}

export interface ProductResponse {
	content: Product[];
	status: number;
}
