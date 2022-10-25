import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(prod: Omit<Product, 'id'>): Product[] {
    const { title, price, description } = prod;
    const newDate = Date.toString();
    const newProduct = new Product(newDate, title, description, price);
    this.products.push(newProduct);
    return this.products;
  }
}
