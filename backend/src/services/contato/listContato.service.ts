import { AppDataSource } from "../../data-source";
import { Cliente } from "../../entities/cliente.entities";
import { Contato } from "../../entities/contato.entities";
import { AppError } from "../../errors/AppError";
import { TContatosResponse } from "../../interfaces/contato.interfaces";
import { contatoSchemaResponse } from "../../schemas/contato.schema";

const listContatoService = async (
  userId: string
): Promise<TContatosResponse> => {
  const contatoRepo = AppDataSource.getRepository(Contato);
  const clienteRepo = AppDataSource.getRepository(Cliente);

  const cliente = await clienteRepo.findOne({
    where: {
      id: userId,
    },
  });

  if (!cliente) {
    throw new AppError("Cliente not found", 404);
  }

  const contato = await contatoRepo.find({
    where: {
      cliente: cliente,
    },
  });

  console.log(contato);

  return contatoSchemaResponse.parse(contato);
};

export { listContatoService };
