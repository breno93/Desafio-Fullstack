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
exports.ensureIsOwnerMiddleware = void 0;
const data_source_1 = require("../data-source");
const contato_entities_1 = require("../entities/contato.entities");
const ensureIsOwnerMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contatoRepo = data_source_1.AppDataSource.getRepository(contato_entities_1.Contato);
    const contatoId = req.params.id;
    const userId = res.locals.userId;
    const contato = yield contatoRepo.findOne({
        where: {
            id: contatoId,
        },
        relations: {
            cliente: true,
        },
    });
    if (!contato) {
        res.status(404).json({
            message: "contato not found",
        });
    }
    if ((contato === null || contato === void 0 ? void 0 : contato.cliente.id) !== userId) {
        res.status(403).json({
            message: "You don't have permission",
        });
    }
    return next();
});
exports.ensureIsOwnerMiddleware = ensureIsOwnerMiddleware;
