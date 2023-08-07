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
exports.CreateEntities1690563445109 = void 0;
class CreateEntities1690563445109 {
    constructor() {
        this.name = 'CreateEntities1690563445109';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "clientes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "telefone" character varying NOT NULL, "dataRegistro" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "contatos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "telefone" character varying NOT NULL, "email" character varying NOT NULL, "dataRegistro" TIMESTAMP NOT NULL DEFAULT now(), "clienteId" uuid, CONSTRAINT "PK_994cdcb2c56dfb5b66217c854cc" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "contatos" ADD CONSTRAINT "FK_4239f05a745fb2f8ff77569c52f" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "contatos" DROP CONSTRAINT "FK_4239f05a745fb2f8ff77569c52f"`);
            yield queryRunner.query(`DROP TABLE "contatos"`);
            yield queryRunner.query(`DROP TABLE "clientes"`);
        });
    }
}
exports.CreateEntities1690563445109 = CreateEntities1690563445109;
