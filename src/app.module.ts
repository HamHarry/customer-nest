import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule, CarModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
