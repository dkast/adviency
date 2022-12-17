import { z } from "zod";
export type Gift = {
  description: string;
  imageUrl: string;
  name: string;
  qty: number;
};

export const schema = z.object({
  description: z.string().min(1, "Campo es requerido"),
  imageUrl: z.string().url("URL no es valida"),
  name: z.string().min(1, "Nombre es requerido"),
  qty: z
    .number()
    .int("Cantidad no es valida")
    .positive("Cantidad debe ser mayor a 0"),
});
