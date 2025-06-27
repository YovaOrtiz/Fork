import { RolesService } from './roles.service';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    getRoles(): {
        id: number;
        name: string;
        description: string;
    }[];
    getRoleById(id: string): {
        id: number;
        name: string;
        description: string;
    };
    createRole(data: any): any;
    updateRole(id: string, data: any): {
        id: number;
        name: string;
        description: string;
    };
    deleteRole(id: string): {
        deleted: boolean;
    };
}
