import { PerfilService } from './perfil.service';
export declare class PerfilController {
    private readonly perfilService;
    constructor(perfilService: PerfilService);
    getPerfil(id: string): {
        id: number;
        nombre: string;
        email: string;
        telefono: string;
        puesto: string;
        avatar: string;
        preferencias: {
            idioma: string;
            tema: string;
        };
    };
    updatePerfil(id: string, data: any): {
        id: number;
        nombre: string;
        email: string;
        telefono: string;
        puesto: string;
        avatar: string;
        preferencias: {
            idioma: string;
            tema: string;
        };
    };
}
