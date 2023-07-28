import { hash } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { Cliente } from "../../entities/cliente.entities";
import { AppError } from "../../errors/AppError";
import {
  TClienteRequest,
  TClienteResponse,
} from "../../interfaces/cliente.interfaces";
import { clienteSchemaResponse } from "../../schemas/cliente.schema";

const createClienteService = async (
  data: TClienteRequest
): Promise<TClienteResponse> => {
  const { email, nome, password, telefone } = data;
  const clienteRepository = AppDataSource.getRepository(Cliente);
  const findCliente = await clienteRepository.findOne({
    where: {
      email,
    },
  });

  if (findCliente) {
    throw new AppError("user already exists", 409);
  }

  const hashedPassword = await hash(password, 10);
  const user = clienteRepository.create({
    nome,
    email,
    telefone,
    password: hashedPassword,
  });

  await clienteRepository.save(user);

  return clienteSchemaResponse.parse(user);
};

export { createClienteService };
