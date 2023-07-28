import { AppDataSource } from "../../data-source";
import { Contato } from "../../entities/contato.entities";
import { AppError } from "../../errors/AppError";
import {
  TContatoResponse,
  TContatoUpdate,
} from "../../interfaces/contato.interfaces";
import { contatoSchema } from "../../schemas/contato.schema";

const updateContatoService = async (
  data: TContatoUpdate,
  contatoId: string
): Promise<TContatoResponse> => {
  const contatoRepo = AppDataSource.getRepository(Contato);
  const oldContato = await contatoRepo.findOneBy({ id: contatoId });

  if (!oldContato) {
    throw new AppError("Contato not found", 404);
  }

  const newContatoData = contatoRepo.create({
    ...oldContato,
    ...data,
  });

  await contatoRepo.save(newContatoData);

  return contatoSchema.parse(newContatoData);
};

export { updateContatoService };
