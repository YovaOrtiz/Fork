import { CreateQuoteDto, UpdateQuoteDto, QuoteStatus } from './dto/quote.dto';
import { Quote } from './entities/quote.entity';
export declare class QuotesController {
    private quotes;
    findAll(): Quote[];
    findOne(id: string): Quote;
    create(dto: CreateQuoteDto): Quote;
    update(id: string, dto: UpdateQuoteDto): Quote;
    updateStatus(id: string, status: QuoteStatus): Quote;
    getPdf(id: string): {
        url: string;
    };
    convertToOrder(id: string): {
        orderId: string;
        fromQuoteId: string;
        createdAt: string;
    };
}
