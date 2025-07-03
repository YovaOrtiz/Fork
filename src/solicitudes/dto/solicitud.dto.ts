import { z } from 'zod';

export const SolicitudStatus = z.enum(["pending", "accepted", "rejected", "completed"]);
export const SolicitudPriority = z.enum(["low", "medium", "high", "urgent"]);

export const CreateSolicitudSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  projectId: z.string(),
  projectName: z.string(),
  fromArea: z.string(),
  toArea: z.string(),
  priority: SolicitudPriority,
  dueDate: z.string().datetime().optional(),
  createdBy: z.object({ id: z.string(), name: z.string() }),
  assignedTo: z.object({ id: z.string(), name: z.string() }).optional()
});

export const CreateComentarioSchema = z.object({
  text: z.string().min(1),
  userId: z.string(),
});

export const FilterSolicitudesSchema = z.object({
  status: SolicitudStatus.optional(),
  priority: SolicitudPriority.optional(),
  fromArea: z.string().optional(),
  toArea: z.string().optional(),
  dateFrom: z.string().datetime().optional(),
  dateTo: z.string().datetime().optional(),
  q: z.string().optional(),
});

export type CreateSolicitudDto = z.infer<typeof CreateSolicitudSchema>;
export type CreateComentarioDto = z.infer<typeof CreateComentarioSchema>;
export type FilterSolicitudesDto = z.infer<typeof FilterSolicitudesSchema>;
