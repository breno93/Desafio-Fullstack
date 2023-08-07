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
exports.deleteClienteService = void 0;
const data_source_1 = require("../../data-source");
const cliente_entities_1 = require("../../entities/cliente.entities");
const AppError_1 = require("../../errors/AppError");
const deleteClienteService = (clienteId) => __awaiter(void 0, void 0, void 0, function* () {
    const clienteRepo = data_source_1.AppDataSource.getRepository(cliente_entities_1.Cliente);
    const cliente = yield clienteRepo.findOneBy({ id: clienteId });
    if (!cliente) {
        throw new AppError_1.AppError("Cliente not found", 404);
    }
    yield clienteRepo.remove(cliente);
});
exports.deleteClienteService = deleteClienteService;
