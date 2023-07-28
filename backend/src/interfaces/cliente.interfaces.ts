import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  clienteSchema,
  clienteSchemaRequest,
  clienteSchemaResponse,
} from "../schemas/cliente.schema";

type TCliente = z.infer<typeof clienteSchema>;
type TClienteRequest = z.infer<typeof clienteSchemaRequest>;
type TClienteResponse = z.infer<typeof clienteSchemaResponse>;
type TClienteUpdate = DeepPartial<TClienteRequest>;
type TClienteUpdateResponse = DeepPartial<TClienteResponse>;

export {
  TCliente,
  TClienteRequest,
  TClienteResponse,
  TClienteUpdate,
  TClienteUpdateResponse,
};
