import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) { }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = this.orderRepository.create({
      orderItems: createOrderDto.orderItems,
      createdAt: new Date(),
      fulfilledAt: null,
    });
    return await this.orderRepository.save(order);
  }

  findAll(): Promise<Order[]> {
    return this.orderRepository.find({
      relations: {
        orderItems: true,
      },
    });
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: { orderItems: true },
    });

    if (!order) throw new NotFoundException(`Order ${id} not found`);

    return order;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }
}
