import React from 'react';
import { RiCloseLine } from 'react-icons/ri';
import * as ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  toggleModal: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  toggleModal,
  children,
}) => {
  ReactModal.default.setAppElement("#__next");
  
  return (
    <ReactModal.default
      isOpen={isOpen}
      onRequestClose={toggleModal}
      className="react-modal"
      overlayClassName="react-modal-overlay"
      ariaHideApp={false}
      preventScroll={false}
    >
      { children }

      <button
        className="close-modal-button"
        onClick={toggleModal}
      >
        <RiCloseLine />
      </button>
    </ReactModal.default>
  )
}