import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRequest } from './requests/product.request';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly userModel: Model<ProductDocument>,
  ) {}

  async create(productRequest: ProductRequest) {
    const createdProduct = await new this.userModel(productRequest).save();
    try {
      return createdProduct;
    } catch (error) {
      if (error) throw new NotFoundException('Product not found');
    }
  }

  async getProduct() {
    const productRerults = await this.userModel.find();
    try {
      return productRerults;
    } catch (error) {
      if (error) throw new NotFoundException('Get Product not found');
    }
  }

  async getProductById(productId: string) {
    const productById = await this.userModel.findById(productId);
    try {
      return productById;
    } catch (error) {
      if (error) throw new NotFoundException('Get Product By ID not found');
    }
  }

  async updateProductById(
    productId: string,
    updateProductRequest: ProductRequest,
  ) {
    const updatedProduct = await this.userModel.findByIdAndUpdate(
      productId,
      updateProductRequest,
    );
    try {
      return updatedProduct;
    } catch (error) {
      if (error) throw new NotFoundException('Update Product By ID not found');
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
