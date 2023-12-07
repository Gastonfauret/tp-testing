import { ProductStatus } from '../product.entity';
import { IsNotEmpty, IsString, MinLength, IsOptional, IsIn } from 'class-validator'

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    id: string

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name: string

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    brand: string

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    type: string

    @IsString()
    @IsNotEmpty()
    @IsIn([ProductStatus.Stock, ProductStatus.Faltante])
    stock: ProductStatus
}

export class UpdateProductDto {
    @IsString()
    @IsOptional()
    id?: string

    @IsString()
    @IsOptional()
    name?: string

    @IsString()
    @IsOptional()
    brand?: string

    @IsString()
    @IsOptional()
    type?: string

    @IsString()
    @IsOptional()
    @IsIn([ProductStatus.Stock, ProductStatus.Faltante])
    stock?: ProductStatus
}