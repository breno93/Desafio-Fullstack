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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTokenService = void 0;
const data_source_1 = require("../../data-source");
const cliente_entities_1 = require("../../entities/cliente.entities");
const AppError_1 = require("../../errors/AppError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const bcryptjs_1 = require("bcryptjs");
const createTokenService = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const clienteRepo = data_source_1.AppDataSource.getRepository(cliente_entities_1.Cliente);
    const cliente = yield clienteRepo.findOne({
        where: {
            email,
        },
    });
    if (!cliente) {
        throw new AppError_1.AppError("Invalid credeltials", 403);
    }
    const passwordMatch = yield (0, bcryptjs_1.compare)(password, cliente.password);
    if (!passwordMatch) {
        throw new AppError_1.AppError("Invalid Credentials", 403);
    }
    const token = jsonwebtoken_1.default.sign({ clienteNome: cliente.nome }, process.env.SECRET_KEY, { expiresIn: "1h", subject: cliente.id });
    return token;
});
exports.createTokenService = createTokenService;
