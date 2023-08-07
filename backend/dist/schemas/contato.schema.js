"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listContatoSchemaResponse = exports.contatoSchemaUpdate = exports.contatoSchemaRequest = exports.contatoSchema = void 0;
const zod_1 = require("zod");
const contatoSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    nome: zod_1.z.string().nonempty(),
    email: zod_1.z.string(),
    telefone: zod_1.z.string(),
    dataRegistro: zod_1.z.date(),
});
exports.contatoSchema = contatoSchema;
const contatoSchemaRequest = contatoSchema.omit({
    id: true,
    dataRegistro: true,
});
exports.contatoSchemaRequest = contatoSchemaRequest;
const listContatoSchemaResponse = zod_1.z.array(contatoSchema);
exports.listContatoSchemaResponse = listContatoSchemaResponse;
const contatoSchemaUpdate = contatoSchema.omit({ id: true }).partial();
exports.contatoSchemaUpdate = contatoSchemaUpdate;
