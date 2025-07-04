import { EstimateDto } from './dto/automation.dto';
export declare class AutomationController {
    estimate(dto: EstimateDto): {
        estimatedPrice: number;
        prototypeUrl: string;
    };
}
