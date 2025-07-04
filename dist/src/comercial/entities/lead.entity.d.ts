import { LeadStatus } from '../dto/lead.dto';
export declare class Lead {
    id: string;
    name: string;
    company: string;
    contact: string;
    status: LeadStatus;
    source: string;
    notes?: string;
    assignedTo: string;
    createdAt: string;
}
