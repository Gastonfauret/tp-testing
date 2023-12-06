export enum ProductStatus {
    Stock = 'Stock',
    Faltante = 'Sin Stock',
};

export class Product {
    id: number;
    name: string;
    brand: string;
    type: string;
    stock: ProductStatus;    
}

