// NovoContatoModal.tsx

import { useState } from "react";
import { Modal } from "./Modal";
import { api } from "../services/api";
import { Contatos } from "./CardContato";

interface NovoContatoModalProps {
  onClose: () => void;
  onContatoCriado: (contato: Contatos) => void;
}

export const NovoContatoModal = ({
  onClose,
  onContatoCriado,
}: NovoContatoModalProps) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleCriarContato = async () => {
    try {
      const response = await api.post<Contatos>("contato", {
        nome,
        email,
        telefone,
        dataRegistro: new Date(),
      });
      onContatoCriado(response.data);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal toggleModal={onClose}>
      <h2>Novo Contato</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Telefone:</label>
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </div>
      <button onClick={handleCriarContato}>Criar</button>
      <button onClick={onClose}>Cancelar</button>
    </Modal>
  );
};
