import { ReactNode, useEffect, useRef } from "react";
import { ContainerModal } from "./modalStyles";

interface ModalProps {
  toggleModal: () => void;
  children: ReactNode;
  blockClosing?: boolean;
}

export const Modal = ({ children, toggleModal, blockClosing }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [toggleModal]);

  return (
    <ContainerModal>
      <div ref={blockClosing ? null : ref}>{children}</div>
    </ContainerModal>
  );
};
