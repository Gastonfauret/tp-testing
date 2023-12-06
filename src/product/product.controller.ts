import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {


    constructor(private productService: ProductService) {}
    @Get()
    findAll() {
    return this.productService.findAll();
    }

    @Post()
    createProduct(@Body() newProduct: CreateProductDto) {
        return this.productService.create(newProduct.id, newProduct.name, newProduct.brand, newProduct.type, newProduct.stock)        
    }
}

// 46:29
// https://www.youtube.com/watch?v=7fOjuCGE_jk
