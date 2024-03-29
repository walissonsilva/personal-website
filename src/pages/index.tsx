import { GetServerSideProps } from "next";

import { Header } from "../components/Header";
import NextHead from "../components/NextHead";
import {
  AboutSection,
  PortfolioSection,
  IPortfolioProject,
  BlogSection,
  IPost,
} from "../components/HomeSections";

import { getPortfolioProjects, getPostsToHome } from "../services/prismic";

import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoMailSharp,
} from "react-icons/io5";

import {
  HomeBanner,
  HomeBannerContainer,
  ImageContainer,
  BannerContent,
  SocialIconsContainer,
  SocialIcon,
} from "../styles/pages/home";
import Footer from "../components/Footer";

interface HomeProps {
  portfolioProjects: IPortfolioProject[];
  posts: IPost[];
}

export default function Home({ portfolioProjects, posts }: HomeProps) {
  return (
    <>
      <NextHead
        title="Home | Walisson Silva"
        description="Site pessoal com informações profissionais, projetos de portfólio, e blog sobre Desenvolvimento Web, Python e Ciência de Dados."
        ogImage="/images/me-avatar.png"
      />

      <Header active="home" />

      <HomeBanner>
        <HomeBannerContainer>
          <ImageContainer>
            <img src="/images/me-avatar.png" alt="Walisson Silva" />
          </ImageContainer>
          <BannerContent>
            <h1>Walisson Silva</h1>
            <h3>
              <strong>Desenvolvedor</strong> Full Stack &&
            </h3>
            <h3>
              <strong>Professor</strong> de Programação
            </h3>

            <SocialIconsContainer>
              <SocialIcon
                href="https://www.linkedin.com/in/walissonsilva/"
                target="_blank"
                aria-label="Link para acessar meu perfil no LinkedIn"
              >
                <IoLogoLinkedin />
              </SocialIcon>
              <SocialIcon
                href="https://github.com/walissonsilva"
                target="_blank"
                aria-label="Link para acessar meu perfil no GitHub"
              >
                <IoLogoGithub />
              </SocialIcon>
              <SocialIcon
                href="https://www.youtube.com/c/walissonsilva"
                target="_blank"
                aria-label="Link para acessar meu canal do YouTube"
              >
                <IoLogoYoutube />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/walissonsilvablog/"
                target="_blank"
                aria-label="Link para acessar meu perfil no Instagram"
              >
                <IoLogoInstagram />
              </SocialIcon>
              <SocialIcon
                href="mailto:walissonsilva10@gmail.com"
                target="_blank"
                aria-label="Link para me enviar um e-mail"
              >
                <IoMailSharp />
              </SocialIcon>
            </SocialIconsContainer>
          </BannerContent>
        </HomeBannerContainer>
      </HomeBanner>

      <AboutSection />

      <PortfolioSection projects={portfolioProjects} />

      <BlogSection posts={posts} />

      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await getPortfolioProjects();
  const posts = await getPostsToHome();

  return {
    props: {
      portfolioProjects: projects,
      posts,
    },
  };
};
