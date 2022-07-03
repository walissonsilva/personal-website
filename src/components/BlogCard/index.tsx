import { BiCalendar, BiTime, BiUser } from "react-icons/bi";
import { IPost } from "../HomeSections";

import {
  Container,
  ContainerLink,
  Content,
  CoverImage,
  Header,
  Level,
  PostData,
  PostDataContainer,
  Subtitle,
} from "./styles";

export function BlogCard({
  id,
  title,
  subtitle,
  imageUrl,
  level,
  readingTime,
  updatedAt,
}: IPost) {
  return (
    <Container>
      <ContainerLink href={`/posts/${id}`} aria-label={title}>
        <Header>
          <CoverImage src={imageUrl} alt={title} />
          <PostDataContainer>
            <PostData>
              <BiCalendar />
              {updatedAt}
            </PostData>
            <PostData>
              <BiTime />
              {`${readingTime} min`}
            </PostData>
            <PostData>
              <BiUser />
              Walisson Silva
            </PostData>
          </PostDataContainer>
        </Header>

        <Content>
          <Subtitle>{subtitle}</Subtitle>
          <Level>{level}</Level>
        </Content>
      </ContainerLink>
    </Container>
  );
}
