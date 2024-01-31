import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsDefined,
  IsString,
  ValidateNested,
} from 'class-validator';

export class CreateOrderDto {
  @IsArray()
  @ArrayMinSize(1, { message: 'At least one order item is required' })
  @ValidateNested({ each: true })
  @Type(() => OrderItem)
  orderItems: Array<OrderItem>;
}

class OrderItem {
  @IsString()
  @IsDefined()
  pharmacy: string;

  @IsString()
  @IsDefined()
  product: string;
}
