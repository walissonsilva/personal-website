import React from 'react';
import Link from 'next/link';

import { SectionTitle } from '../../../styles/atoms';
import { BlogCard } from '../../BlogCard';
import { Button } from '../../Button';

import {
  ButtonCenteredContainer,
  SectionContainer
} from '../../../styles/containers';
import {
  Container,
} from './styles';

export interface IPost {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  readingTime: number;
  updatedAt: string;
}

interface BlogSectionProps {
  posts: IPost[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  posts,
}) => {
  return (
    <SectionContainer>
      <SectionTitle>Blog <hr /></SectionTitle>

      <Container>
        { posts.map(post => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            subtitle={post.subtitle}
            imageUrl={post.imageUrl}
            level={post.level}
            readingTime={post.readingTime}
            updatedAt={post.updatedAt}
          />
        )) }
      </Container>

      <ButtonCenteredContainer>
        <Link href="/blog">
          <a>
            <Button>
              Ver mais
            </Button>
          </a>
        </Link>
      </ButtonCenteredContainer>
    </SectionContainer>
  )
}