import { Module } from '@nestjs/common';
import { OrderModule } from './order/order.module';
import { Order, OrderItem } from './order/entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    OrderModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [OrderItem, Order],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
