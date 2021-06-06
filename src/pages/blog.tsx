import { GetStaticProps } from "next"
import { BiSearch } from "react-icons/bi"

import { Header } from "../components/Header"
import NextHead from "../components/NextHead"
import { IPost } from "../components/HomeSections"
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
import { FormEvent, useState } from "react"
import { useDebouncedCallback } from "use-debounce"

interface BlogProps {
  posts: IPost[];
}

export default function Blog({
  posts,
}: BlogProps) {
  const [searchPost, setSearchPost] = useState("");
  const [currentPosts, setCurrentPosts] = useState(posts);

  const handleSearchPost = (event: FormEvent<HTMLInputElement>) => {
    setSearchPost(event.currentTarget.value);
    findPosts();
  }

  const findPosts = useDebouncedCallback(() => {
    const newPosts = posts.filter(post =>
      post.title.toLowerCase()
      .includes(searchPost.toLowerCase())
    );

    console.log(newPosts)
    setCurrentPosts(newPosts);
  }, 400)

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
          <FlexContainer>
            <SectionTitle>
              Blog
              <hr />
            </SectionTitle>

            <SearchBarContainer>
              <SearchInput
                placeholder="Pesquisa..."
                value={searchPost}
                onChange={handleSearchPost}
              />
              <BiSearch />
            </SearchBarContainer>
          </FlexContainer>


          <PostsContainer>
            { currentPosts.map(post => (
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