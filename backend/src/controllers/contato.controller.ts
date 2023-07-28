import { Request, Response } from "express";
import { createContatoService } from "../services/contato/createContato.service";
import { deleteContatoService } from "../services/contato/deleteContato.service";
import { listContatoService } from "../services/contato/listContato.service";
import { updateContatoService } from "../services/contato/updateContato.service";

const createContatoController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const newContato = await createContatoService(req.body, userId);

  return res.status(201).json(newContato);
};

const listContatoController = async (req: Request, res: Response) => {
  const userId = res.locals.userId;
  const contato = await listContatoService(userId);

  return res.json(contato);
};

const updateContatoController = async (req: Request, res: Response) => {
  const updateContato = await updateContatoService(req.body, req.params.id);
  return res.json(updateContato);
};

const deleteContatoController = async (req: Request, res: Response) => {
  await deleteContatoService(req.params.id);
  return res.status(204).send();
};

export {
  createContatoController,
  listContatoController,
  updateContatoController,
  deleteContatoController,
};
