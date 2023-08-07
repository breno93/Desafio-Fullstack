"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listClienteSchemaResponse = exports.clienteSchemaResponse = exports.clienteSchemaRequest = exports.clienteSchemaUpdate = exports.clienteSchema = void 0;
const zod_1 = require("zod");
const contato_schema_1 = require("./contato.schema");
// export const ClienteSchema = z.object({
//   nomeCompleto: z.string().nonempty(),
//   email: z.string().email(),
//   telefone: z.string(),
//   dataRegistro: z.date(),
// });
const clienteSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    nome: zod_1.z.string(),
    email: zod_1.z.string().email(),
    telefone: zod_1.z.string(),
    password: zod_1.z.string(),
    contatos: zod_1.z.array(contato_schema_1.contatoSchema),
});
exports.clienteSchema = clienteSchema;
const clienteSchemaRequest = clienteSchema.omit({
    id: true,
    contatos: true,
});
exports.clienteSchemaRequest = clienteSchemaRequest;
const clienteSchemaUpdate = clienteSchema
    .omit({
    id: true,
})
    .partial();
exports.clienteSchemaUpdate = clienteSchemaUpdate;
const clienteSchemaResponse = clienteSchema.omit({
    password: true,
    contatos: true,
});
exports.clienteSchemaResponse = clienteSchemaResponse;
const listClienteSchemaResponse = zod_1.z.array(clienteSchemaResponse);
exports.listClienteSchemaResponse = listClienteSchemaResponse;
