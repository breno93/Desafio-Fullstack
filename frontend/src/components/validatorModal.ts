import { z } from "zod";

export const schema = z.object({
  nome: z.string(),
  email: z.string().email("Deve ser um email"),
  telefone: z.string(),
});

export type EditModalData = z.infer<typeof schema>;
