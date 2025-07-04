import { OrderStatus } from '../dto/order.dto';
import { OrderItemDto } from '../dto/order.dto';

export class Order {
  id: string;
  clientId: string;
  clientName: string;
  projectId: string;
  status: OrderStatus;
  items: OrderItemDto[];
  total: number;
  deliveryDate: string;
  assignedTo: string;
  notes?: string;
  createdAt: string;
}
