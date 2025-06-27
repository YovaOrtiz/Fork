import { AreasService } from './areas.service';
export declare class AreasController {
    private readonly areasService;
    constructor(areasService: AreasService);
    getAreas(): {
        id: number;
        name: string;
        status: string;
        responsible: string;
        progress: number;
    }[];
    getAreaById(id: string): {
        id: number;
        name: string;
        status: string;
        responsible: string;
        progress: number;
    };
    createArea(data: any): any;
    updateArea(id: string, data: any): {
        id: number;
        name: string;
        status: string;
        responsible: string;
        progress: number;
    };
    deleteArea(id: string): {
        deleted: boolean;
    };
}
