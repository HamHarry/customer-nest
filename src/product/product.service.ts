import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRequest } from './requests/product.request';
import { ProductResponse } from './responses/product.response';

@Injectable()
export class ProductService {
  create(productRequest: ProductRequest) {
    return productRequest;
  }

  getProduct(productId: string): ProductResponse {
    const products: ProductResponse[] = [
      {
        id: '1',
        name: 'KATS Costings',
        size: 'L',
        price: 6900,
      },
      {
        id: '2',
        name: 'KATS Costings',
        size: 'M',
        price: 4900,
      },
      {
        id: '3',
        name: 'GUN Production',
        size: 'L',
        price: 5900,
      },
      {
        id: '4',
        name: 'GUN Production',
        size: 'M',
        price: 3900,
      },
      {
        id: '5',
        name: 'GUN Production',
        size: 'S',
        price: 2500,
      },
    ];

    if (!productId) throw new NotFoundException('Product not found');

    const findedproduct = products.find((product) => {
      return product.id === productId;
    });
    return findedproduct;
  }
}
