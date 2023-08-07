import { useEffect, useState } from "react";
import {
  CardContainer,
  CardContatoWrapper,
  ContatoListLi,
  ContatoListUl,
  DeleteButton,
  EditButton,
} from "./cardContatoStyles";
import { api } from "../services/api";
import { ModalEditContato } from "./ModalEdit";
import { Modal } from "./Modal";
import { NovoContatoModal } from "./NovoContatoModal";

export interface Contatos {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  dataRegistro: Date;
}

export const CardContato = () => {
  const [contatos, setContatos] = useState<Contatos[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [contatoToEdit, setContatoToEdit] = useState<Contatos | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [contatoToDelete, setContatoToDelete] = useState<Contatos | null>(null);
  const [showNovoContatoModal, setShowNovoContatoModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await api.get<Contatos[]>("contato");
      setContatos(response.data);
    })();
  }, []);

  const toggleModal = (contato?: Contatos) => {
    setContatoToEdit(contato || null);
    setIsOpenModal((prevState) => !prevState);
  };

  const openDeleteModal = (contato: Contatos) => {
    setContatoToDelete(contato);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setContatoToDelete(null);
    setShowDeleteModal(false);
  };

  const handleConfirmDelete = async () => {
    if (contatoToDelete) {
      try {
        await api.delete(`contato/${contatoToDelete.id}`);
        setContatos((prevContatos) =>
          prevContatos.filter((c) => c.id !== contatoToDelete.id)
        );
      } catch (error) {
        console.log(error);
      }
      closeDeleteModal();
    }
  };

  const updateContatos = async () => {
    try {
      const response = await api.get<Contatos[]>("contato");
      setContatos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleContatoCriado = async (contato: Contatos) => {
    try {
      await api.post("contato", contato);
      updateContatos(); // Atualiza o estado contatos após a criação do novo contato
      setShowNovoContatoModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CardContainer>
      {isOpenModal && (
        <ModalEditContato
          setContatos={setContatos}
          toggleModal={toggleModal}
          contatoToEdit={contatoToEdit}
        />
      )}
      {showDeleteModal && (
        <Modal toggleModal={closeDeleteModal}>
          <h2>Confirmar exclusão</h2>
          <p>Tem certeza que deseja excluir este contato?</p>
          <button onClick={handleConfirmDelete}>Confirmar</button>
          <button onClick={closeDeleteModal}>Cancelar</button>
        </Modal>
      )}
      {showNovoContatoModal && (
        <NovoContatoModal
          onClose={() => setShowNovoContatoModal(false)}
          onContatoCriado={handleContatoCriado}
        />
      )}
      {contatos.map((contato) => (
        <CardContatoWrapper key={contato.id}>
          <div>
            <ContatoListUl>
              <ContatoListLi>Nome: {contato.nome}</ContatoListLi>
              <ContatoListLi>Email: {contato.email}</ContatoListLi>
              <ContatoListLi>Telefone: {contato.telefone}</ContatoListLi>
            </ContatoListUl>

            <EditButton onClick={() => toggleModal(contato)}>Editar</EditButton>
            <DeleteButton onClick={() => openDeleteModal(contato)}>
              Excluir Contato
            </DeleteButton>
          </div>
        </CardContatoWrapper>
      ))}
    </CardContainer>
  );
};
