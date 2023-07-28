import { array, z } from "zod";
import { contatoSchema } from "./contato.schema";

// export const ClienteSchema = z.object({
//   nomeCompleto: z.string().nonempty(),
//   email: z.string().email(),
//   telefone: z.string(),
//   dataRegistro: z.date(),
// });

const clienteSchema = z.object({
  id: z.string().uuid(),
  nome: z.string(),
  email: z.string().email(),
  telefone: z.string(),
  password: z.string(),
  contatos: z.array(contatoSchema),
});

const clienteSchemaRequest = clienteSchema.omit({
  id: true,
  contatos: true,
});

const clienteSchemaUpdate = clienteSchema
  .omit({
    id: true,
  })
  .partial();

const clienteSchemaResponse = clienteSchema.omit({
  password: true,
  contatos: true,
});

const listClienteSchemaResponse = z.array(clienteSchemaResponse);

export {
  clienteSchema,
  clienteSchemaUpdate,
  clienteSchemaRequest,
  clienteSchemaResponse,
  listClienteSchemaResponse,
};
