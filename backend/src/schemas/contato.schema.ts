import { z } from "zod";

const contatoSchema = z.object({
  id: z.string().uuid(),
  nome: z.string().nonempty(),
  email: z.string(),
  telefone: z.string(),
  dataRegistro: z.date(),
});

const contatoSchemaRequest = contatoSchema.omit({
  id: true,
  dataRegistro: true,
});

const listContatoSchemaResponse = z.array(contatoSchema);

const contatoSchemaUpdate = contatoSchema.omit({ id: true }).partial();

export {
  contatoSchema,
  contatoSchemaRequest,
  contatoSchemaUpdate,
  listContatoSchemaResponse,
};
