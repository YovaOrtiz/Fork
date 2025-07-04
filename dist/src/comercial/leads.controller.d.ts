import { CreateLeadDto, UpdateLeadDto } from './dto/lead.dto';
import { Lead } from './entities/lead.entity';
export declare class LeadsController {
    private leads;
    findAll(): Lead[];
    findOne(id: string): Lead;
    create(dto: CreateLeadDto): Lead;
    update(id: string, dto: UpdateLeadDto): Lead;
    remove(id: string): {
        deleted: boolean;
    };
}
