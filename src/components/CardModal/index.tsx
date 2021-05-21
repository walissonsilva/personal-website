import React from 'react';

import {
  Container,
  CoverImage,
  OverlayContainer,
  Title,
} from './styles';

interface CardModalProps {
  title: string;
  coverImage: string;
  altCoverImage?: string;
}

export const CardModal: React.FC<CardModalProps> = ({
  title,
  coverImage,
  altCoverImage = "",
}) => {
  return (
    <Container>
      <CoverImage src={coverImage} alt={altCoverImage} />
      <OverlayContainer>
        <Title>{ title }</Title>
      </OverlayContainer>
    </Container>
  )
}