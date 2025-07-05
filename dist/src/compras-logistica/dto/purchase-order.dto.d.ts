import { z } from 'zod';
export declare const OriginStatusEnum: z.ZodEnum<["pending_supplier", "left_origin", "in_customs", "arrived_local_port", "received_at_warehouse"]>;
export declare const InternalStatusEnum: z.ZodEnum<["pending", "printed", "packaged", "quality_check", "completed"]>;
export declare const ExternalShippingStatusEnum: z.ZodEnum<["pending_pickup", "in_transit", "delivered", "exception", "not_applicable"]>;
export declare const OverallStatusEnum: z.ZodEnum<["pending", "in_production", "in_transit", "delivered", "completed", "cancelled"]>;
export declare const PurchaseOrderSchema: z.ZodObject<{
    productName: z.ZodString;
    quantity: z.ZodNumber;
    unitPrice: z.ZodNumber;
    origin: z.ZodString;
    destination: z.ZodOptional<z.ZodString>;
    originStatus: z.ZodEnum<["pending_supplier", "left_origin", "in_customs", "arrived_local_port", "received_at_warehouse"]>;
    internalStatus: z.ZodEnum<["pending", "printed", "packaged", "quality_check", "completed"]>;
    externalShippingStatus: z.ZodEnum<["pending_pickup", "in_transit", "delivered", "exception", "not_applicable"]>;
    overallStatus: z.ZodEnum<["pending", "in_production", "in_transit", "delivered", "completed", "cancelled"]>;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    notes?: string;
    productName?: string;
    quantity?: number;
    unitPrice?: number;
    origin?: string;
    destination?: string;
    originStatus?: "pending_supplier" | "left_origin" | "in_customs" | "arrived_local_port" | "received_at_warehouse";
    internalStatus?: "completed" | "pending" | "printed" | "packaged" | "quality_check";
    externalShippingStatus?: "pending_pickup" | "in_transit" | "delivered" | "exception" | "not_applicable";
    overallStatus?: "completed" | "cancelled" | "pending" | "in_transit" | "delivered" | "in_production";
}, {
    notes?: string;
    productName?: string;
    quantity?: number;
    unitPrice?: number;
    origin?: string;
    destination?: string;
    originStatus?: "pending_supplier" | "left_origin" | "in_customs" | "arrived_local_port" | "received_at_warehouse";
    internalStatus?: "completed" | "pending" | "printed" | "packaged" | "quality_check";
    externalShippingStatus?: "pending_pickup" | "in_transit" | "delivered" | "exception" | "not_applicable";
    overallStatus?: "completed" | "cancelled" | "pending" | "in_transit" | "delivered" | "in_production";
}>;
export declare class PurchaseOrderDto {
    productName: string;
    quantity: number;
    unitPrice: number;
    origin: string;
    destination?: string;
    originStatus: typeof OriginStatusEnum.Enum;
    internalStatus: typeof InternalStatusEnum.Enum;
    externalShippingStatus: typeof ExternalShippingStatusEnum.Enum;
    overallStatus: typeof OverallStatusEnum.Enum;
    notes?: string;
}
