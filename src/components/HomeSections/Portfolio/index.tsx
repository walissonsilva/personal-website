import React from "react";

import { SectionTitle } from "../../../styles/atoms";

import { SectionContainer } from "../../../styles/containers";
import { CardModal } from "../../CardModal";

import { Container } from "./styles";

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
  return (
    <SectionContainer>
      <SectionTitle>
        Portfólio <hr />
      </SectionTitle>

      <Container>
        {projects.map((project) => (
          <CardModal
            key={project.id}
            title={project.title}
            coverImage={project.imageUrl}
            altCoverImage={project.title}
            description={project.description}
            actionUrl={project.projectUrl}
            isDescriptionHTML
          />
        ))}
      </Container>
    </SectionContainer>
  );
};
