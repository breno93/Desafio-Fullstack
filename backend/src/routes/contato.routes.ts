import { Router } from "express";
import {
  createContatoController,
  deleteContatoController,
  listContatoController,
  updateContatoController,
} from "../controllers/contato.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import {
  contatoSchemaRequest,
  contatoSchemaUpdate,
} from "../schemas/contato.schema";

const contatoRoutes = Router();

contatoRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureDataIsValid(contatoSchemaRequest),
  createContatoController
);

contatoRoutes.get("", ensureAuthMiddleware, listContatoController);

contatoRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  ensureDataIsValid(contatoSchemaUpdate),
  updateContatoController
);
contatoRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerMiddleware,
  deleteContatoController
);

export { contatoRoutes };
