export declare class ConfiguracionService {
    getConfiguracion(id: string): {
        id: number;
        usuarioId: number;
        notificaciones: boolean;
        idioma: string;
        tema: string;
        timezone: string;
    };
    updateConfiguracion(id: string, data: any): {
        id: number;
        usuarioId: number;
        notificaciones: boolean;
        idioma: string;
        tema: string;
        timezone: string;
    };
}
