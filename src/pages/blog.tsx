import { GetStaticProps } from "next"
import { BiSearch } from "react-icons/bi"

import { Header } from "../components/Header"
import NextHead from "../components/NextHead"
import { IBlogCard } from "../components/HomeSections"
import { BlogCard } from "../components/BlogCard"
import Footer from "../components/Footer"
import { getPostsToBlogPage } from '../services/prismic';

import { SectionContainer } from "../styles/containers"
import {
  Container,
  PostsContainer,
  FlexContainer,
  SearchBarContainer,
  SearchInput,
} from '../styles/pages/blog';
import { SectionTitle } from "../styles/atoms"

interface BlogProps {
  posts: IBlogCard[];
}

export default function Blog({
  posts,
}: BlogProps) {
  return (
    <>
      <NextHead title="Blog | Walisson Silva" />
      
      <Header active="blog" />

      <SectionContainer>
        
        <Container>
          <FlexContainer>
            <SectionTitle>
              Blog
              <hr />
            </SectionTitle>

            <SearchBarContainer>
              <SearchInput
                placeholder="Pesquisa..."
              />
              <BiSearch />
            </SearchBarContainer>
          </FlexContainer>


          <PostsContainer>
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
          </PostsContainer>
        </Container>
      </SectionContainer>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsToBlogPage();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}