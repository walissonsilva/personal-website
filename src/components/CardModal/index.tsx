import React, { KeyboardEvent } from "react";
import Link from "next/link";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { useModal } from "../Modal/useModal";

import {
  Container,
  CoverImage,
  OverlayContainer,
  Title,
  ModalTitle,
  ModalDescription,
  ButtonContainer,
} from "./styles";
import { handleEnterKeyPress } from "../../utils/handleEnterKeyPressed";

interface CardModalProps {
  title: string;
  coverImage: string;
  altCoverImage?: string;
  description?: string;
  actionUrl?: string;
  isDescriptionHTML?: boolean;
}

export const CardModal: React.FC<CardModalProps> = ({
  title,
  coverImage,
  altCoverImage = "",
  description = "",
  actionUrl,
  isDescriptionHTML = false,
}) => {
  const { isOpen, toggleModal } = useModal();

  return (
    <Container
      onClick={toggleModal}
      tabIndex={0}
      onKeyDown={(event: KeyboardEvent<HTMLElement>) =>
        handleEnterKeyPress(event, toggleModal)
      }
    >
      <CoverImage src={coverImage} alt={altCoverImage} />
      <OverlayContainer>
        <Title>{title}</Title>
      </OverlayContainer>

      <Modal isOpen={isOpen} toggleModal={toggleModal}>
        <ModalTitle>{title}</ModalTitle>

        <CoverImage src={coverImage} alt={altCoverImage} />

        <ModalDescription>
          {isDescriptionHTML ? (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          ) : (
            <>{description}</>
          )}
        </ModalDescription>

        {actionUrl && (
          <ButtonContainer>
            <Link href={actionUrl}>
              <a target="_blank">
                <Button size="sm">Conferir no GitHub</Button>
              </a>
            </Link>
          </ButtonContainer>
        )}
      </Modal>
    </Container>
  );
};
