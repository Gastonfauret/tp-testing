import { ProductStatus } from '../product.entity';

export class CreateProductDto {
    id: string
    name: string
    brand: string
    type: string
    stock: ProductStatus
}

export class UpdateProductDto {
    id?: string
    name?: string
    brand?: string
    type?: string
    stock?: ProductStatus
}