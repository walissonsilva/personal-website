import Link from 'next/link';
import { IBlogCard } from '../HomeSections';

import {
  Container,
  Header,
  CoverImage,
  Content,
  Subtitle,
  Level,
} from './styles';

export function BlogCard({
  id,
  title,
  subtitle,
  imageUrl,
  level,
}: IBlogCard) {
  console.log(imageUrl);
  return (
    <Link href={`/blog/${id}`}>
      <Container>
        <Header>
          <CoverImage src={imageUrl} alt={title} />
        </Header>

        <Content>
          <Subtitle>{ subtitle }</Subtitle>
          <Level>{ level }</Level>
        </Content>
      </Container>
    </Link>
  )
}