import { Controller, Get, Post, Body, Param, Delete, Patch, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './uploads',
      filename: (_, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + extname(file.originalname));
      },
    }),
    fileFilter: (_, file, cb) => {
      if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
        cb(null, true);
      } else {
        cb(new Error('Only image files are allowed!'), false);
      }
    },
  }))
  create(@Body() dto: CreateProductDto, @UploadedFile() file: Express.Multer.File) {
    const imageUrl = file ? `uploads/${file.filename}` : dto.imageUrl;

    // Convert string values to proper types when coming from FormData
    const productData = {
      ...dto,
      price: typeof dto.price === 'string' ? parseFloat(dto.price) : dto.price,
      stock: typeof dto.stock === 'string' ? parseInt(dto.stock, 10) : dto.stock,
      categoryId: typeof dto.categoryId === 'string' ? parseInt(dto.categoryId, 10) : dto.categoryId,
      imageUrl,
    };

    return this.productService.create(productData);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: CreateProductDto) {
    return this.productService.update(+id, dto);
  }
}
