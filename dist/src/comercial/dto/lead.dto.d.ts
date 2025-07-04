export declare enum LeadStatus {
    NUEVO = "Nuevo",
    EN_CONTACTO = "En Contacto",
    CALIFICADO = "Calificado",
    DESCARTADO = "Descartado",
    CONVERTIDO = "Convertido"
}
export declare class CreateLeadDto {
    name: string;
    company: string;
    contact: string;
    status: LeadStatus;
    source: string;
    notes?: string;
    assignedTo: string;
}
export declare class UpdateLeadDto {
    name?: string;
    company?: string;
    contact?: string;
    status?: LeadStatus;
    source?: string;
    notes?: string;
    assignedTo?: string;
}
