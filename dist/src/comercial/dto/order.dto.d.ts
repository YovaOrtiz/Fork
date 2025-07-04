export declare enum OrderStatus {
    PENDIENTE = "Pendiente",
    EN_PROCESO = "En Proceso",
    FABRICACION = "Fabricaci\u00F3n",
    ENVIADO = "Enviado",
    COMPLETADO = "Completado",
    CANCELADO = "Cancelado"
}
export declare class OrderItemDto {
    productId: string;
    productName: string;
    quantity: number;
    unitPrice: number;
}
export declare class CreateOrderDto {
    clientId: string;
    clientName: string;
    projectId: string;
    status: OrderStatus;
    items: OrderItemDto[];
    total?: number;
    deliveryDate: string;
    assignedTo: string;
    notes?: string;
}
export declare class UpdateOrderDto {
    clientId?: string;
    clientName?: string;
    projectId?: string;
    status?: OrderStatus;
    items?: OrderItemDto[];
    total?: number;
    deliveryDate?: string;
    assignedTo?: string;
    notes?: string;
}
