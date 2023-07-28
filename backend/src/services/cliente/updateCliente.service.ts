import { AppDataSource } from "../../data-source";
import { Cliente } from "../../entities/cliente.entities";
import { AppError } from "../../errors/AppError";
import {
  TClienteResponse,
  TClienteUpdateResponse,
} from "../../interfaces/cliente.interfaces";
import { clienteSchemaResponse } from "../../schemas/cliente.schema";

const updateClienteService = async (
  data: TClienteUpdateResponse,
  clienteId: string
): Promise<TClienteResponse> => {
  const clienteRepo = AppDataSource.getRepository(Cliente);
  const oldCliente = await clienteRepo.findOneBy({ id: clienteId });

  if (!oldCliente) {
    throw new AppError("Cliente not found", 404);
  }

  const newClienteData = {
    ...oldCliente,
    ...data,
  };

  await clienteRepo.save(newClienteData);

  return clienteSchemaResponse.parse(newClienteData);
};

export { updateClienteService };
