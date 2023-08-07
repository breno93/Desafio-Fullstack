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
exports.deleteContatoController = exports.updateContatoController = exports.listContatoController = exports.createContatoController = void 0;
const createContato_service_1 = require("../services/contato/createContato.service");
const deleteContato_service_1 = require("../services/contato/deleteContato.service");
const listContato_service_1 = require("../services/contato/listContato.service");
const updateContato_service_1 = require("../services/contato/updateContato.service");
const createContatoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = res.locals.userId;
    const newContato = yield (0, createContato_service_1.createContatoService)(req.body, userId);
    return res.status(201).json(newContato);
});
exports.createContatoController = createContatoController;
const listContatoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = res.locals.userId;
    const contato = yield (0, listContato_service_1.listContatoService)(userId);
    return res.json(contato);
});
exports.listContatoController = listContatoController;
const updateContatoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateContato = yield (0, updateContato_service_1.updateContatoService)(req.body, req.params.id);
    return res.json(updateContato);
});
exports.updateContatoController = updateContatoController;
const deleteContatoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, deleteContato_service_1.deleteContatoService)(req.params.id);
    return res.status(204).send();
});
exports.deleteContatoController = deleteContatoController;
