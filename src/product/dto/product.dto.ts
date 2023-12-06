import { ProductStatus } from '../product.entity';

export class CreateProductDto {
    id: number
    name: string
    brand: string
    type: string
    stock: ProductStatus
}