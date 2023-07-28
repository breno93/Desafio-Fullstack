import { AppDataSource } from "../../data-source";
import { Cliente } from "../../entities/cliente.entities";
import { AppError } from "../../errors/AppError";
import { TClienteResponse } from "../../interfaces/cliente.interfaces";
import { listClienteSchemaResponse } from "../../schemas/cliente.schema";

const listClienteService = async (
  userId: string
): Promise<TClienteResponse[]> => {
  const clienteRepo = AppDataSource.getRepository(Cliente);

  const cliente = await clienteRepo.find({
    relations: {
      contatos: true,
    },
  });
  console.log(cliente);

  if (!cliente) {
    throw new AppError("Cliente not found", 404);
  }

  return listClienteSchemaResponse.parse(cliente);
};

export { listClienteService };
