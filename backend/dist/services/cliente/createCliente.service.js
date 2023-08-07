"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClienteService = void 0;
const bcryptjs_1 = require("bcryptjs");
const data_source_1 = require("../../data-source");
const cliente_entities_1 = require("../../entities/cliente.entities");
const AppError_1 = require("../../errors/AppError");
const cliente_schema_1 = require("../../schemas/cliente.schema");
const createClienteService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, nome, password, telefone } = data;
    const clienteRepository = data_source_1.AppDataSource.getRepository(cliente_entities_1.Cliente);
    const findCliente = yield clienteRepository.findOne({
        where: {
            email,
        },
    });
    if (findCliente) {
        throw new AppError_1.AppError("user already exists", 409);
    }
    const hashedPassword = yield (0, bcryptjs_1.hash)(password, 10);
    const user = clienteRepository.create({
        nome,
        email,
        telefone,
        password: hashedPassword,
    });
    yield clienteRepository.save(user);
    return cliente_schema_1.clienteSchemaResponse.parse(user);
});
exports.createClienteService = createClienteService;
