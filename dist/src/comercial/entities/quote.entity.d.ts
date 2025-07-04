import { QuoteStatus } from '../dto/quote.dto';
import { QuoteItemDto } from '../dto/quote.dto';
export declare class Quote {
    id: string;
    leadId: string;
    leadName: string;
    status: QuoteStatus;
    items: QuoteItemDto[];
    conditions?: string;
    total: number;
    createdAt: string;
    sentAt?: string;
    approvedAt?: string;
    rejectedAt?: string;
}
