import { AppDataSource } from "../../data-source";
import { Cliente } from "../../entities/cliente.entities";
import { Contato } from "../../entities/contato.entities";
import { AppError } from "../../errors/AppError";
import { TContatoResponse } from "../../interfaces/contato.interfaces";
import { listContatoSchemaResponse } from "../../schemas/contato.schema";

const listContatoService = async (
  userId: string
): Promise<TContatoResponse[]> => {
  const contatoRepo = AppDataSource.getRepository(Contato);
  const clienteRepo = AppDataSource.getRepository(Cliente);

  const cliente = await clienteRepo.findOne({
    where: {
      id: userId,
    },
  });

  console.log(cliente);

  if (!cliente) {
    throw new AppError("Cliente not found", 404);
  }

  const contato = await contatoRepo.find({
    where: {
      cliente: {
        id: cliente.id,
      },
    },
  });

  console.log(contato);

  return listContatoSchemaResponse.parse(contato);
};

export { listContatoService };
