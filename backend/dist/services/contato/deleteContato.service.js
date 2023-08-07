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
exports.deleteContatoService = void 0;
const data_source_1 = require("../../data-source");
const contato_entities_1 = require("../../entities/contato.entities");
const AppError_1 = require("../../errors/AppError");
const deleteContatoService = (contatoId) => __awaiter(void 0, void 0, void 0, function* () {
    const contatoRepo = data_source_1.AppDataSource.getRepository(contato_entities_1.Contato);
    const contato = yield contatoRepo.findOneBy({
        id: contatoId,
    });
    if (!contato) {
        throw new AppError_1.AppError("Contato not found", 404);
    }
    yield contatoRepo.remove(contato);
});
exports.deleteContatoService = deleteContatoService;
