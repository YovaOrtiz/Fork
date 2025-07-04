import { CreatePriceDto, UpdatePriceDto } from './dto/price.dto';
import { Price } from './entities/price.entity';
export declare class PricesController {
    private prices;
    findAll(): Price[];
    findOne(id: string): Price;
    create(dto: CreatePriceDto): Price;
    update(id: string, dto: UpdatePriceDto): Price;
    remove(id: string): {
        deleted: boolean;
    };
}
