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
exports.deleteClienteController = exports.updateClienteController = exports.listClienteController = exports.createClienteController = void 0;
const createCliente_service_1 = require("../services/cliente/createCliente.service");
const deleteCliente_service_1 = require("../services/cliente/deleteCliente.service");
const listCliente_service_1 = require("../services/cliente/listCliente.service");
const updateCliente_service_1 = require("../services/cliente/updateCliente.service");
const createClienteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCliente = yield (0, createCliente_service_1.createClienteService)(req.body);
    return res.status(201).json(newCliente);
});
exports.createClienteController = createClienteController;
const listClienteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clienteId = res.locals.userId;
    const cliente = yield (0, listCliente_service_1.listClienteService)(clienteId);
    return res.json(cliente);
});
exports.listClienteController = listClienteController;
const updateClienteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateCLiente = yield (0, updateCliente_service_1.updateClienteService)(req.body, req.params.id);
    return res.json(updateCLiente);
});
exports.updateClienteController = updateClienteController;
const deleteClienteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteCliente_service_1.deleteClienteService)(req.params.id);
    return res.status(204).send();
});
exports.deleteClienteController = deleteClienteController;
