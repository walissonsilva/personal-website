import React from 'react';
import {
  FcStart,
  FcCommandLine,
  FcGraduationCap,
  FcStatistics,
  FcElectronics,
  FcIdea,
  FcLinux,
  FcLike,
} from 'react-icons/fc';

import {
  SectionTitle,
} from '../../../styles/atoms';

import {
  Container,
  SimpleCardGrid,
  SimpleCard,
} from './styles';
import { SectionContainer } from '../../../styles/containers';

export const AboutSection: React.FC = () => {
  return (
    <SectionContainer>
      <Container>
        <SectionTitle>
          About
          <hr />
        </SectionTitle>

        <SimpleCardGrid>
          <SimpleCard>
            <FcCommandLine />
            <strong>Desenvolvedor Web</strong>
          </SimpleCard>
          <SimpleCard>
            <FcStatistics />
            <strong>Professor</strong>
          </SimpleCard>
          <SimpleCard>
            <FcGraduationCap />
            <strong>Mestre em Eng. Elétrica</strong>
          </SimpleCard>
          <SimpleCard>
            <FcStart />
            <strong>Youtuber</strong>
          </SimpleCard>
          <SimpleCard>
            <FcIdea />
            <strong>Eng. Eletricista</strong>
          </SimpleCard>
          <SimpleCard>
            <FcElectronics />
            <strong>Técnico em Eletrônica</strong>
          </SimpleCard>
          <SimpleCard>
            <FcLinux />
            <strong>Entusiasta de Software Livre</strong>
          </SimpleCard>
          <SimpleCard>
            <FcLike />
            <strong>Louco por programação</strong>
          </SimpleCard>
        </SimpleCardGrid>
      </Container>
    </SectionContainer>
  )
}