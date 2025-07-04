import { CreateOrderDto, UpdateOrderDto, OrderStatus } from './dto/order.dto';
import { Order } from './entities/order.entity';
export declare class OrdersController {
    private orders;
    findAll(): Order[];
    findOne(id: string): Order;
    create(dto: CreateOrderDto): Order;
    update(id: string, dto: UpdateOrderDto): Order;
    updateStatus(id: string, status: OrderStatus): Order;
    remove(id: string): {
        deleted: boolean;
    };
}
