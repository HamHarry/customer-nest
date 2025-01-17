import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SummaryModule } from './summary/summary.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:demo1234@test.un3t8.mongodb.net/?retryWrites=true&w=majority&appName=Test',
    ),
    UserModule,
    CarModule,
    ProductModule,
    SummaryModule,
    CartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
