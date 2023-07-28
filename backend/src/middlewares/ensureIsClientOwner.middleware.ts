import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Cliente } from "../entities/cliente.entities";

const ensureIsClientOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const clienteRepo = AppDataSource.getRepository(Cliente);

  const clienteId = req.params.id;
  const userId = res.locals.userId;

  const cliente = await clienteRepo.findOne({
    where: {
      id: clienteId,
    },
  });

  if (!cliente) {
    res.status(404).json({
      message: "Cliente not found",
    });
  }

  // if (cliente?.cliente.id !== userId) {
  //   res.status(403).json({
  //     message: "You don't have permission",
  //   });
  // }

  return next();
};

export { ensureIsClientOwnerMiddleware };
