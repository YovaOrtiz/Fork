export declare class PerfilService {
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
