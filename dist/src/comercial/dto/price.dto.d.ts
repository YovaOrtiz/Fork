export declare class CreatePriceDto {
    name: string;
    category: string;
    basePrice: number;
    taxRate: number;
    tariffRate: number;
    margin: number;
}
export declare class UpdatePriceDto {
    name?: string;
    category?: string;
    basePrice?: number;
    taxRate?: number;
    tariffRate?: number;
    margin?: number;
}
