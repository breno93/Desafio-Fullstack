import { Dispatch } from "react";
import { useForm } from "react-hook-form";
import { EditModalData, schema } from "./validatorModal";
import { Modal } from "./Modal";
import { api } from "../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Contatos } from "./CardContato";

interface ModalEditContatoProps {
  toggleModal: () => void;
  setContatos: Dispatch<React.SetStateAction<Contatos[]>>;
  contatoToEdit: Contatos;
}

export const ModalEditContato = ({
  setContatos,
  toggleModal,
  contatoToEdit,
}: ModalEditContatoProps) => {
  const { register, handleSubmit } = useForm<EditModalData>({
    resolver: zodResolver(schema),
  });

  const handleEditContato = async (data: EditModalData) => {
    const editedContato = {
      nome: data.nome,
      email: data.email,
      telefone: data.telefone,
    };
    console.log(editedContato);
    try {
      await api.patch(`/contato/${contatoToEdit.id}`, editedContato);
      const response = await api.get<Contatos[]>("contato");
      setContatos(response.data);
      toggleModal();
    } catch (error) {
      console.error("Erro ao editar contato:", error);
    }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <form onSubmit={handleSubmit(handleEditContato)}>
        <label htmlFor="text">Nome</label>
        <input
          type="text"
          id="text"
          {...register("nome")}
          defaultValue={contatoToEdit.nome}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          defaultValue={contatoToEdit.email}
        />

        <label htmlFor="">Telefone</label>
        <input
          type="tel"
          id="telefone"
          {...register("telefone")}
          defaultValue={contatoToEdit.telefone}
        />

        <button type="submit">Salvar</button>
      </form>
    </Modal>
  );
};
