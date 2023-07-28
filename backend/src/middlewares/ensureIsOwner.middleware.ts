import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contato } from "../entities/contato.entities";

const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contatoRepo = AppDataSource.getRepository(Contato);

  const contatoId = req.params.id;
  const userId = res.locals.userId;

  const contato = await contatoRepo.findOne({
    where: {
      id: contatoId,
    },
    relations: {
      cliente: true,
    },
  });

  if (!contato) {
    res.status(404).json({
      message: "contato not found",
    });
  }

  if (contato?.cliente.id !== userId) {
    res.status(403).json({
      message: "You don't have permission",
    });
  }

  return next();
};

export { ensureIsOwnerMiddleware };
