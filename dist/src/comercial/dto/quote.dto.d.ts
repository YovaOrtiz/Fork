export declare enum QuoteStatus {
    BORRADOR = "Borrador",
    ENVIADA = "Enviada",
    ACEPTADA = "Aceptada",
    RECHAZADA = "Rechazada"
}
export declare class QuoteItemDto {
    productId: string;
    productName: string;
    quantity: number;
    unitPrice: number;
}
export declare class CreateQuoteDto {
    leadId: string;
    leadName: string;
    status: QuoteStatus;
    items: QuoteItemDto[];
    conditions?: string;
}
export declare class UpdateQuoteDto {
    leadId?: string;
    leadName?: string;
    status?: QuoteStatus;
    items?: QuoteItemDto[];
    conditions?: string;
}
