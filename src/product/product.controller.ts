import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }
    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Post()
    createProduct(@Body() newProduct: CreateProductDto) {
        return this.productService.create(newProduct.id, newProduct.name, newProduct.brand, newProduct.type, newProduct.stock)
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string) {
        this.productService.delete(id)
    }

    @Patch(':id')
    updateProduct(@Param('id') id: string, @Body() updatedFields: UpdateProductDto) {
        return this.productService.update(id, updatedFields)
    }
}

// 46:29
// https://www.youtube.com/watch?v=7fOjuCGE_jk
