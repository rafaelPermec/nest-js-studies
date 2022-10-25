import { Controller, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body()
    completeProduct: {
      title: string;
      description: string;
      price: number;
    },
    // Another way to do it!:
    // @Body('title') prodTitle: string,
    // @Body('description') prodDescription: string,
    // @Body('price') prodPrice: number,
  ) {
    const generatedId = this.productsService.insertProduct(completeProduct);
    return { id: generatedId };
  }
}
