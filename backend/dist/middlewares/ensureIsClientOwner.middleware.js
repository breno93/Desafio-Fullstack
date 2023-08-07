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
exports.ensureIsClientOwnerMiddleware = void 0;
const data_source_1 = require("../data-source");
const cliente_entities_1 = require("../entities/cliente.entities");
const ensureIsClientOwnerMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const clienteRepo = data_source_1.AppDataSource.getRepository(cliente_entities_1.Cliente);
    const clienteId = req.params.id;
    const userId = res.locals.userId;
    const cliente = yield clienteRepo.findOne({
        where: {
            id: clienteId,
        },
    });
    if (!cliente) {
        res.status(404).json({
            message: "Cliente not found",
        });
    }
    // if (cliente?.cliente.id !== userId) {
    //   res.status(403).json({
    //     message: "You don't have permission",
    //   });
    // }
    return next();
});
exports.ensureIsClientOwnerMiddleware = ensureIsClientOwnerMiddleware;
