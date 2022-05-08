import React from "react";
import { RiCloseLine } from "react-icons/ri";
import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
}

ReactModal.setAppElement("#__next");

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  toggleModal,
  children,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      className="react-modal"
      overlayClassName="react-modal-overlay"
      ariaHideApp={false}
      preventScroll={false}
    >
      {children}

      <button className="close-modal-button" onClick={toggleModal}>
        <RiCloseLine />
      </button>
    </ReactModal>
  );
};
