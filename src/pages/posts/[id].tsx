import { GetServerSideProps } from "next";
import { BiCalendar, BiTime, BiUser } from "react-icons/bi";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import NextHead from "../../components/NextHead";
import { getPost } from "../../services/prismic";
import { SectionContainer } from "../../styles/containers";

import {
  Container,
  PostHeader,
  PostDataContainer,
  PostData,
  Level,
  PostTitle,
  PostSubtitle,
  Content,
} from "../../styles/pages/post";

interface IPost {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  level: string;
  content: string;
  readingTime: number;
  updatedAt: string;
}

type PostProps = {
  post: IPost;
};

export default function Post({ post }: PostProps) {
  return (
    <>
      <NextHead
        title={post.title}
        description={post.subtitle}
        ogImage={post.imageUrl}
        ogUrl={`posts/${post.id}`}
      />

      <Header active="blog" />

      <SectionContainer>
        <Container>
          <PostHeader>
            <PostTitle>{post.title}</PostTitle>
            <PostSubtitle>{post.subtitle}</PostSubtitle>

            <PostDataContainer>
              <PostData>
                <BiUser />
                Walisson Silva
              </PostData>
              <PostData>
                <BiCalendar />
                {post.updatedAt}
              </PostData>
              <PostData>
                <BiTime />
                {`${post.readingTime} min`}
              </PostData>
              <Level>{post.level}</Level>
            </PostDataContainer>
          </PostHeader>

          <Content dangerouslySetInnerHTML={{ __html: post.content }} />
        </Container>
      </SectionContainer>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  const post = await getPost(String(id));

  return {
    props: {
      post,
    },
  };
};
