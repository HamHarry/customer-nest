import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cart, CartDocument } from './schemas/cart.schema';
import { Model, Types } from 'mongoose';
import { Product, ProductDocument } from 'src/product/schemas/product.schema';
import { CartListResponse } from './responses/cart.reponse';
import { modelMapper } from 'src/utils/mapper.utils';
import { CreateCartRequest } from './requests/cart.request';
import { ProductService } from 'src/product/product.service';
import { CreateProductListRequest } from 'src/product/requests/product.request';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private readonly cartModel: Model<CartDocument>,
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
    private readonly productService: ProductService,
  ) {}

  async createCart(createCartRequest: CreateCartRequest) {
    try {
      const { cartData } = createCartRequest;
      const { products: productsRequest } = cartData;

      const createProductList: CreateProductListRequest = {
        productData: productsRequest,
      };

      const createdProducts =
        await this.productService.createProductList(createProductList);

      const products = modelMapper(CartListResponse, {
        data: createdProducts,
      }).data;

      const productIds = products.map((item) => {
        return new Types.ObjectId(item._id);
      });

      const totalPrice = productsRequest.reduce((prev, curr) => {
        return prev + curr.price;
      }, 0);

      const newCarts = {
        ...cartData,
        productIds,
        totalPrice,
        totalItem: productIds?.length ?? 0,
      };

      const createdCart = await new this.cartModel(newCarts).save();

      return createdCart;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getCarts() {
    const cartRes = await this.cartModel.find().populate('products');

    return cartRes;
  }
}
