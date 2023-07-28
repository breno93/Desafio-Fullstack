import { AppDataSource } from "../../data-source";
import { Cliente } from "../../entities/cliente.entities";
import { AppError } from "../../errors/AppError";
import { TLoginRequest } from "../../interfaces/login.interface";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { compare } from "bcryptjs";

const createTokenService = async ({ email, password }: TLoginRequest) => {
  const clienteRepo = AppDataSource.getRepository(Cliente);

  const cliente = await clienteRepo.findOne({
    where: {
      email,
    },
  });

  if (!cliente) {
    throw new AppError("Invalid credeltials", 403);
  }
  const passwordMatch = await compare(password, cliente.password);

  if (!passwordMatch) {
    throw new AppError("Invalid Credentials", 403);
  }
  const token = jwt.sign(
    { clienteNome: cliente.nome },
    process.env.SECRET_KEY!,
    { expiresIn: "1h", subject: cliente.id }
  );

  return token;
};

export { createTokenService };
