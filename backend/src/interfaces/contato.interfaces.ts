import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  contatoSchema,
  contatoSchemaRequest,
  contatoSchemaResponse,
} from "../schemas/contato.schema";

type TContatoRequest = z.infer<typeof contatoSchemaRequest>;
type TContato = z.infer<typeof contatoSchema>;
type TContatoResponse = z.infer<typeof contatoSchema>;
type TContatosResponse = z.infer<typeof contatoSchemaResponse>;
type TContatoUpdate = DeepPartial<TContatoRequest>;

export {
  TContatoRequest,
  TContato,
  TContatoResponse,
  TContatoUpdate,
  TContatosResponse,
};
