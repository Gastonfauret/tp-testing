import { Injectable } from '@nestjs/common';
import { Product, ProductStatus } from './product.entity';
import { UpdateProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {

    private product: Product[] = [
        {
            id: '1',
            name: 'Lata de Atun',
            brand: 'Marolio',
            type: 'Pescado',
            stock: ProductStatus.Stock
        }
    ]

    findAll() {
        return this.product;
    }

    findById(id: string): Product { 
        return this.product.find(product => product.id === id)
    }


    create(id: string, name: string, brand: string, type: string, stock: ProductStatus) {
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

    delete(id: string) {
        this.product = this.product.filter(product => product.id !== id)
    }

    update(id: string, updatedFields: UpdateProductDto): Product {
        const product = this.findById(id)
        const newProduct = Object.assign(product, updatedFields)
        this.product = this.product.map(product => product.id === id ? newProduct : product)
        return newProduct
    }
}

//1:05:56
// https://www.youtube.com/watch?v=7fOjuCGE_jk

