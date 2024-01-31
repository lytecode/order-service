import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column({ default: null })
  fulfilledAt: Date;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { cascade: true })
  orderItems: OrderItem[];
}

@Entity()
export class OrderItem {
  @PrimaryColumn()
  id: number;

  @Column()
  pharmacy: string;

  @Column()
  product: string;

  @ManyToOne(() => Order, (order) => order.orderItems)
  order: Order;
}
