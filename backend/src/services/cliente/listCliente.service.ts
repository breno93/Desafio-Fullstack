import { AppDataSource } from "../../data-source";
import { Cliente } from "../../entities/cliente.entities";
import { AppError } from "../../errors/AppError";
import { TClienteResponse } from "../../interfaces/cliente.interfaces";
import { clienteSchemaResponse } from "../../schemas/cliente.schema";

const listClienteService = async (
  userId: string
): Promise<TClienteResponse> => {
  const clienteRepo = AppDataSource.getRepository(Cliente);

  const cliente = await clienteRepo.findOne({
    where: {
      id: userId,
    },
  });

  if (!cliente) {
    throw new AppError("Cliente not found", 404);
  }

  return clienteSchemaResponse.parse(cliente);
};

export { listClienteService };
