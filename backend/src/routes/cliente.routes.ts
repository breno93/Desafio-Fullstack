import { Router } from "express";
import {
  createClienteController,
  deleteClienteController,
  listClienteController,
  updateClienteController,
} from "../controllers/cliente.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { ensureIsClientOwnerMiddleware } from "../middlewares/ensureIsClientOwner.middleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import {
  clienteSchemaRequest,
  clienteSchemaUpdate,
} from "../schemas/cliente.schema";

const clienteRoutes = Router();

clienteRoutes.post(
  "",
  ensureDataIsValid(clienteSchemaRequest),
  createClienteController
);
clienteRoutes.get("", ensureAuthMiddleware, listClienteController);

clienteRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsClientOwnerMiddleware,
  ensureDataIsValid(clienteSchemaUpdate),
  updateClienteController
);

clienteRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsClientOwnerMiddleware,
  deleteClienteController
);

export { clienteRoutes };
