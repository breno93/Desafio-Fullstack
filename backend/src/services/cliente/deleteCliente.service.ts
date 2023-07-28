import { AppDataSource } from "../../data-source";
import { Cliente } from "../../entities/cliente.entities";
import { AppError } from "../../errors/AppError";

const deleteClienteService = async (clienteId: string): Promise<void> => {
  const clienteRepo = AppDataSource.getRepository(Cliente);
  const cliente = await clienteRepo.findOneBy({ id: clienteId });

  if (!cliente) {
    throw new AppError("Cliente not found", 404);
  }

  await clienteRepo.remove(cliente);
};

export { deleteClienteService };
