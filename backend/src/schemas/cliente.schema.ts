import { z } from "zod";

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
});

const clienteSchemaRequest = clienteSchema.omit({
  id: true,
});

const clienteSchemaUpdate = clienteSchema
  .omit({
    id: true,
  })
  .partial();

const clienteSchemaResponse = clienteSchema.omit({
  password: true,
});

export {
  clienteSchema,
  clienteSchemaUpdate,
  clienteSchemaRequest,
  clienteSchemaResponse,
};
