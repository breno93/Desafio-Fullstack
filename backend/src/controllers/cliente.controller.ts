import { Request, Response } from "express";
import { createClienteService } from "../services/cliente/createCliente.service";
import { deleteClienteService } from "../services/cliente/deleteCliente.service";
import { listClienteService } from "../services/cliente/listCliente.service";
import { updateClienteService } from "../services/cliente/updateCliente.service";

const createClienteController = async (req: Request, res: Response) => {
  const newCliente = await createClienteService(req.body);

  return res.status(201).json(newCliente);
};

const listClienteController = async (req: Request, res: Response) => {
  const clienteId = res.locals.userId;
  const cliente = await listClienteService(clienteId);

  return res.json(cliente);
};

const updateClienteController = async (req: Request, res: Response) => {
  const updateCLiente = await updateClienteService(req.body, req.params.id);

  return res.json(updateCLiente);
};

const deleteClienteController = async (req: Request, res: Response) => {
  await deleteClienteService(req.params.id);
  return res.status(204).send();
};

export {
  createClienteController,
  listClienteController,
  updateClienteController,
  deleteClienteController,
};
