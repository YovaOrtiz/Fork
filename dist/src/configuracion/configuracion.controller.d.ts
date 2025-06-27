import { ConfiguracionService } from './configuracion.service';
export declare class ConfiguracionController {
    private readonly configuracionService;
    constructor(configuracionService: ConfiguracionService);
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
