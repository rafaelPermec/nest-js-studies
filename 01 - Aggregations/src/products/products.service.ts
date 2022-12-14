import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct(prod: Omit<Product, 'id'>): string {
    const { title, price, description } = prod;
    const newDate = new Date().toString();
    const newProduct = new Product(newDate, title, description, price);
    this.products.push(newProduct);
    return newDate;
  }
}
