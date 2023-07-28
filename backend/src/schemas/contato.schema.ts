import { z } from "zod";

const contatoSchema = z.object({
  id: z.string().uuid(),
  nome: z.string().nonempty(),
  dataRegistro: z.date(),
});

const contatoSchemaRequest = contatoSchema.omit({
  id: true,
  dataRegistro: true,
});

const contatoSchemaUpdate = contatoSchema.omit({ id: true }).partial();

const contatoSchemaResponse = z.array(contatoSchema);

export {
  contatoSchema,
  contatoSchemaRequest,
  contatoSchemaUpdate,
  contatoSchemaResponse,
};
