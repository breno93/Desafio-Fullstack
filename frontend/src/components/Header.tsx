import { Button, HeaderWrapper } from "./headerStyle";
import { CardContato } from "./CardContato";
import { NovoContatoModal } from "./NovoContatoModal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [showNovoContato, setShowNovoContato] = useState(false);
  const [showNovoContatoModal, setShowNovoContatoModal] = useState(false);

  const navigate = useNavigate();

  const handleNovoContatoClick = () => {
    setShowNovoContatoModal(true);
  };

  const handleClickSair = () => {
    localStorage.removeItem("cliente-token");
    navigate("/");
  };

  return (
    <>
      <HeaderWrapper>
        <Button onClick={handleNovoContatoClick}>Novo Contato</Button>
        <Button>Deletar Minha Conta</Button>
        <Button onClick={handleClickSair}>Sair</Button>
      </HeaderWrapper>
      {showNovoContatoModal && (
        <NovoContatoModal
          onClose={() => setShowNovoContatoModal(false)}
          onContatoCriado={() => {
            setShowNovoContatoModal(false);
            setShowNovoContato(true);
          }}
        />
      )}
      {showNovoContato && <CardContato />} {}
    </>
  );
};
