import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { Order, OrderItem } from './order/entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PharmacyModule } from './pharmacy/pharmacy.module';

@Module({
  imports: [
    OrderModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [OrderItem, Order],
    }),
    PharmacyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
