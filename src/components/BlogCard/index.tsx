import Link from 'next/link';
import { BiCalendar, BiTime, BiUser } from 'react-icons/bi';
import { IBlogCard } from '../HomeSections';

import {
  Container,
  Header,
  CoverImage,
  Content,
  Subtitle,
  Level,
  PostDataContainer,
  PostData,
} from './styles';

export function BlogCard({
  id,
  title,
  subtitle,
  imageUrl,
  level,
  readingTime,
  updatedAt,
}: IBlogCard) {
  return (
    <Link href={`/posts/${id}`}>
      <Container>
        <Header>
          <CoverImage src={imageUrl} alt={title} />
          <PostDataContainer>
            <PostData>
              <BiCalendar />
              { updatedAt }
            </PostData>
            <PostData>
              <BiTime />
              { `${readingTime} min` }
            </PostData>
            <PostData>
              <BiUser />
              Walisson Silva
            </PostData>
          </PostDataContainer>
        </Header>

        <Content>
          <Subtitle>{ subtitle }</Subtitle>
          <Level>{ level }</Level>
        </Content>
      </Container>
    </Link>
  )
}