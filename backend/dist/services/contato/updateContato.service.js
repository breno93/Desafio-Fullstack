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
exports.updateContatoService = void 0;
const data_source_1 = require("../../data-source");
const contato_entities_1 = require("../../entities/contato.entities");
const AppError_1 = require("../../errors/AppError");
const contato_schema_1 = require("../../schemas/contato.schema");
const updateContatoService = (data, contatoId) => __awaiter(void 0, void 0, void 0, function* () {
    const contatoRepo = data_source_1.AppDataSource.getRepository(contato_entities_1.Contato);
    const oldContato = yield contatoRepo.findOneBy({ id: contatoId });
    if (!oldContato) {
        throw new AppError_1.AppError("Contato not found", 404);
    }
    const newContatoData = contatoRepo.create(Object.assign(Object.assign({}, oldContato), data));
    yield contatoRepo.save(newContatoData);
    return contato_schema_1.contatoSchema.parse(newContatoData);
});
exports.updateContatoService = updateContatoService;
