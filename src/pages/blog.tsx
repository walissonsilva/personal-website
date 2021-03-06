import { GetServerSideProps } from "next";
import { useMemo, useState } from "react";
import { BlogCard } from "../components/BlogCard";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import { IPost } from "../components/HomeSections";
import NextHead from "../components/NextHead";
import { SearchBar } from "../components/SearchBar";
import { useSearchBar } from "../components/SearchBar/useSearchBar";
import { getPostsToBlogPage } from "../services/prismic";
import { SectionTitle } from "../styles/atoms";
import { SectionContainer } from "../styles/containers";
import {
  Container,
  BlogHeaderContainer,
  PostsContainer,
} from "../styles/pages/blog";

interface BlogProps {
  posts: IPost[];
}

export default function Blog({ posts }: BlogProps) {
  const searchBarProps = useSearchBar<IPost>(posts);

  return (
    <>
      <NextHead
        title="Blog | Walisson Silva"
        description="Blog sobre Desenvolvimento Web, Python e Ciência de Dados."
        ogImage=""
        ogUrl="blog"
      />

      <Header active="blog" />

      <SectionContainer>
        <Container>
          <BlogHeaderContainer>
            <SectionTitle>
              Blog
              <hr />
            </SectionTitle>

            <SearchBar {...searchBarProps} objectFieldToSearch="title" />
          </BlogHeaderContainer>

          <PostsContainer>
            {searchBarProps.objectAfterSearch.map((post) => (
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
            ))}
          </PostsContainer>
        </Container>
      </SectionContainer>

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPostsToBlogPage();

  return {
    props: {
      posts,
    },
  };
};
