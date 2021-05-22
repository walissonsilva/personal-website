import React from 'react';
import Link from 'next/link';
import { Button } from '../Button';
import { Modal } from '../Modal';
import { useModal } from '../Modal/useModal';

import {
  Container,
  CoverImage,
  OverlayContainer,
  Title,
  ModalTitle,
  ModalDescription,
  ButtonContainer,
} from './styles';

interface CardModalProps {
  title: string;
  coverImage: string;
  altCoverImage?: string;
  description?: string;
}

export const CardModal: React.FC<CardModalProps> = ({
  title,
  coverImage,
  altCoverImage = "",
  description = "",
}) => {
  const { isOpen, toggleModal } = useModal();

  return (
    <Container onClick={toggleModal}>
      <CoverImage src={coverImage} alt={altCoverImage} />
      <OverlayContainer>
        <Title>{ title }</Title>
      </OverlayContainer>

      <Modal
        isOpen={isOpen}
        toggleModal={toggleModal}
      >
        <ModalTitle>{ title }</ModalTitle>

        <CoverImage src={coverImage} alt={altCoverImage} />

        <ModalDescription>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam iste quis quia ipsam, esse nihil, aliquid impedit aut molestiae nostrum nesciunt architecto velit beatae placeat quasi dicta vel facere pariatur?
          {/* { description } */}

        </ModalDescription>
        
        <ButtonContainer>
          <Link href="https://github.com/walissonsilva/ig-news">
            <a target="_blank">
              <Button size="sm">
                Conferir no GitHub
              </Button>
            </a>
          </Link>
        </ButtonContainer>
      </Modal>
    </Container>
  )
}