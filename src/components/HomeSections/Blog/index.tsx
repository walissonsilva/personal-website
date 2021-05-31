import React from 'react';

import { SectionTitle } from '../../../styles/atoms';
import { SectionContainer } from '../../../styles/containers';
import { BlogCard } from '../../BlogCard';
import NextHead from '../../NextHead';

import {
  Container,
} from './styles';

export interface IBlogCard {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  readingTime: number;
  updatedAt: string;
}

interface BlogSectionProps {
  posts: IBlogCard[];
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
    </SectionContainer>
  )
}