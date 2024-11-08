import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateProductListRequest,
  CreateProductRequest,
  ProductRequest,
} from './requests/product.request';
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
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async create(createProductRequest: CreateProductRequest) {
    try {
      const product = createProductRequest.productData;
      const newName = `${product.type}'_'${product.name}`;
      const newPrice = product.price / 32;

      const body = {
        name: newName,
        price: newPrice,
        size: product.size,
      };

      const createdProduct = await new this.productModel(body).save();
      return createdProduct;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createProductList(createProductListRequest: CreateProductListRequest) {
    try {
      const products = createProductListRequest.productData;

      const newProductList = [];
      products.forEach((product) => {
        const newName = `${product.type}'_'${product.name}`;
        const newPrice = product.price / 32;

        const newProduct = {
          name: newName,
          price: newPrice,
          size: product.size,
        };

        newProductList.push(newProduct);
      });

      const createdProduct = await this.productModel.insertMany(newProductList);
      return createdProduct;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProducts(): Promise<ProductResponse[]> {
    try {
      const productRerults = await this.productModel.find();
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
      const productById = await this.productModel.findById(productId);
      const product = modelMapper(ProductResponse, productById);
      const nameList = product.name.split('_');

      let price = product.price * 32;
      let name = nameList?.length > 1 ? nameList[1] : '';
      let type = nameList?.length > 0 ? nameList[0] : '';

      if (type && !name) {
        name = `${type}`;
        type = '';
        price = product.price;
      }

      const body = {
        name,
        type,
        size: product.size,
        price, // bath
      };
      return body;
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
      const updatedProduct = await this.productModel.findByIdAndUpdate(
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
    const deletedProduct = await this.productModel.deleteMany();
    return deletedProduct;
  }

  async deleteProductById(productId: string) {
    const deletedProduct = await this.productModel.findByIdAndDelete(productId);
    return deletedProduct;
  }
}
