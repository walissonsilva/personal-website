import { GetServerSideProps } from "next";
import { CoursesList } from "../components/CoursesList";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import NextHead from "../components/NextHead";
import { SearchBar } from "../components/SearchBar";
import { useSearchBar } from "../components/SearchBar/useSearchBar";
import { getCourses } from "../services/prismic";
import { SectionTitle } from "../styles/atoms";
import { SectionContainer } from "../styles/containers";
import {
  Container,
  BlogHeaderContainer,
  PostsContainer,
} from "../styles/pages/blog";

export type ICourse = {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  description: string;
  youtubeUrl: string;
};

interface CourseProps {
  courses: ICourse[];
}

const Courses: React.FC<CourseProps> = ({ courses }) => {
  const searchBarProps = useSearchBar<ICourse>(courses);

  return (
    <>
      <NextHead
        title="Cursos | Walisson Silva"
        description="Cursos sobre Desenvolvimento Web, Python e Ciência de Dados, ministrados por Walisson Silva."
        ogImage="/images/me-avatar.png"
        ogUrl="/cursos"
      />

      <Header active="cursos" />

      <SectionContainer>
        <Container>
          <BlogHeaderContainer>
            <SectionTitle>
              Cursos
              <hr />
            </SectionTitle>

            <SearchBar {...searchBarProps} objectFieldToSearch="title" />
          </BlogHeaderContainer>

          <PostsContainer>
            <CoursesList courses={searchBarProps.objectAfterSearch} />
          </PostsContainer>
        </Container>
      </SectionContainer>

      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const courses = await getCourses();

  return {
    props: {
      courses,
    },
  };
};

export default Courses;
