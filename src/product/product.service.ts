import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRequest } from './requests/product.request';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';
import {
  ProductResponse,
  ProductResponseList,
} from './responses/product.response';
import { modelMapper } from 'src/utils/mapper.utils';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly userModel: Model<ProductDocument>,
  ) {}

  async create(productRequest: ProductRequest) {
    try {
      const createdProduct = await new this.userModel(productRequest).save();
      return createdProduct;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProducts(): Promise<ProductResponse[]> {
    try {
      const productRerults = await this.userModel.find();
      if (!productRerults) throw new NotFoundException('product not found');

      const products = modelMapper(ProductResponseList, {
        data: productRerults,
      }).data;

      return products;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProductById(productId: string) {
    try {
      const productById = await this.userModel.findById(productId);
      return productById;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateProductById(
    productId: string,
    updateProductRequest: ProductRequest,
  ) {
    try {
      const updatedProduct = await this.userModel.findByIdAndUpdate(
        productId,
        updateProductRequest,
      );
      return updatedProduct;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProduct() {
    const deletedProduct = await this.userModel.deleteMany();
    return deletedProduct;
  }

  async deleteProductById(productId: string) {
    const deletedProduct = await this.userModel.findByIdAndDelete(productId);
    return deletedProduct;
  }
}
