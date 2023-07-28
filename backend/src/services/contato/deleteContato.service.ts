import { AppDataSource } from "../../data-source";
import { Contato } from "../../entities/contato.entities";
import { AppError } from "../../errors/AppError";

const deleteContatoService = async (contatoId: string): Promise<void> => {
  const contatoRepo = AppDataSource.getRepository(Contato);
  const contato = await contatoRepo.findOneBy({
    id: contatoId,
  });

  if (!contato) {
    throw new AppError("Contato not found", 404);
  }

  await contatoRepo.remove(contato);
};

export { deleteContatoService };
