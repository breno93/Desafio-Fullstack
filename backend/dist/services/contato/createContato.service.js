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
exports.createContatoService = void 0;
const data_source_1 = require("../../data-source");
const cliente_entities_1 = require("../../entities/cliente.entities");
const contato_entities_1 = require("../../entities/contato.entities");
const AppError_1 = require("../../errors/AppError");
const contato_schema_1 = require("../../schemas/contato.schema");
const createContatoService = (data, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const contatoRepo = data_source_1.AppDataSource.getRepository(contato_entities_1.Contato);
    const clienteRepo = data_source_1.AppDataSource.getRepository(cliente_entities_1.Cliente);
    const cliente = yield clienteRepo.findOne({
        where: {
            id: userId,
        },
    });
    if (!cliente) {
        throw new AppError_1.AppError("User not found", 404);
    }
    const contato = contatoRepo.create(Object.assign(Object.assign({}, data), { cliente }));
    yield contatoRepo.save(contato);
    return contato_schema_1.contatoSchema.parse(contato);
});
exports.createContatoService = createContatoService;
