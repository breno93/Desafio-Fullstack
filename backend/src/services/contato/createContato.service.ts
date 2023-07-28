import { AppDataSource } from "../../data-source";
import { Cliente } from "../../entities/cliente.entities";
import { Contato } from "../../entities/contato.entities";

import { AppError } from "../../errors/AppError";
import {
  TContatoRequest,
  TContatoResponse,
} from "../../interfaces/contato.interfaces";
import { contatoSchema } from "../../schemas/contato.schema";

const createContatoService = async (
  data: TContatoRequest,
  userId: string
): Promise<TContatoResponse> => {
  const contatoRepo = AppDataSource.getRepository(Contato);
  const clienteRepo = AppDataSource.getRepository(Cliente);

  const cliente = await clienteRepo.findOne({
    where: {
      id: userId,
    },
  });

  if (!cliente) {
    throw new AppError("User not found", 404);
  }

  const contato = contatoRepo.create({
    nome: data.nome,
  });

  await contatoRepo.save(contato);

  return contatoSchema.parse(contato);
};

export { createContatoService };
