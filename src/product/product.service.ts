import { Injectable } from '@nestjs/common';
import { Product, ProductStatus } from './product.entity';

@Injectable()
export class ProductService {

    private product: Product[] = [
        {
        id: 1,
        name: 'Lata de Atun',
        brand: 'Marolio',
        type: 'Pescado',
        stock: ProductStatus.Stock
    }
]

    findAll() { 
        return this.product;
    }

    findById(id: number) { }
    create(id: number, name: string, brand: string, type: string, stock: ProductStatus) {
        const product = {
            id,
            name,
            brand,
            type,
            stock: ProductStatus.Stock
        }
        this.product.push(product)
        return product;
    }
    update(id: number) { }
    delete(id: number) {}
}

