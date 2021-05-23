import React from 'react';

import { SectionTitle } from '../../../styles/atoms';

import { SectionContainer } from '../../../styles/containers';
import { CardModal } from '../../CardModal';

import {
  Container,
} from './styles';

export interface IPortfolioProject {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  projectUrl: string;
}

interface PortfolioSectionProps {
  projects: IPortfolioProject[];
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  projects,
}) => {
  console.log(projects)

  return (
    <SectionContainer>
      <SectionTitle>Portfolio <hr /></SectionTitle>

      <Container>
        { projects.map((project) => (
          <CardModal
            key={project.id}
            title={project.title}
            coverImage={project.imageUrl}
            altCoverImage={project.title}
            description={project.description}
            actionUrl={project.projectUrl}
            isDescriptionHTML
          />
        ) ) }

        {/* <CardModal
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
        /> */}
      </Container>
    </SectionContainer>
  )
}