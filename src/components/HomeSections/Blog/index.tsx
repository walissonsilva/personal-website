import React from 'react';

import { SectionTitle } from '../../../styles/atoms';
import { SectionContainer } from '../../../styles/containers';
import { BlogCard } from '../../BlogCard';

import {
  Container,
} from './styles';

export interface IBlogCard {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
}

interface BlogSectionProps {
  posts: IBlogCard[];
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  posts,
}) => {
  console.log(posts)
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
          />
        )) }
      </Container>
    </SectionContainer>
  )
}