import React from 'react';

import { SectionTitle } from '../../../styles/atoms';

import { SectionContainer } from '../../../styles/containers';
import { CardModal } from '../../CardModal';

import {
  Container,
} from './styles';

export const PortfolioSection: React.FC = () => {
  return (
    <SectionContainer>
      <SectionTitle>Portfolio <hr /></SectionTitle>

      <Container>
        <CardModal
          title="IgNews"
          coverImage="https://github.com/walissonsilva/blog-nextjs/raw/master/public/preview.gif"
        />

        <CardModal
          title="Lista de Tarefas Simples"
          coverImage="https://github.com/walissonsilva/todo-list-react/raw/main/public/to-do.gif"
        />
        
        <CardModal
          title="DT Money"
          coverImage="https://github.com/walissonsilva/ws-money/raw/main/public/preview.png"
        />

        <CardModal
          title="Blog com Next.js"
          coverImage="https://github.com/walissonsilva/blog-nextjs/raw/master/public/preview.gif"
        />
      </Container>
    </SectionContainer>
  )
}