export interface Product {
	current: number;
	image: string | null;
	index: number;
	limit: number;
	name: string;
	price: string;
}

export interface ProductResponse {
	content: Product[];
	status: number;
}
