import { GetStaticProps } from 'next';

import { Header } from '../components/Header'
import NextHead from '../components/NextHead'
import {
  AboutSection,
  PortfolioSection,
  IPortfolioProject,
  BlogSection,
  IBlogCard,
} from '../components/HomeSections';

import {
  getPortfolioProjects,
  getPostsToHome,
} from '../services/prismic';

import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoMailSharp,
} from 'react-icons/io5';

import {
  HomeBanner,
  HomeBannerContainer,
  ImageContainer,
  BannerContent,
  SocialIconsContainer,
  SocialIcon,
} from '../styles/pages/home';
import Footer from '../components/Footer';

interface HomeProps {
  portfolioProjects: IPortfolioProject[];
  posts: IBlogCard[];
}

export default function Home({
  portfolioProjects,
  posts,
}: HomeProps) {
  return (
    <>
      <NextHead title="Home | Walisson Silva" />
      <Header active="home" />

      <HomeBanner>
        <HomeBannerContainer>
          <ImageContainer>
            <img src="/images/me.png" alt="Walisson Silva" />
          </ImageContainer>
          <BannerContent>
            <h1>Walisson Silva</h1>
            <h3>
              <strong>Desenvolvedor</strong> Web &&
            </h3>
            <h3>
              <strong>Professor</strong> de Web e Data Science
            </h3>

            <SocialIconsContainer>
              <SocialIcon
                href="https://www.linkedin.com/in/walissonsilva/"
                target="_blank"
              >
                <IoLogoLinkedin />
              </SocialIcon>
              <SocialIcon
                href="https://github.com/walissonsilva"
                target="_blank"
              >
                <IoLogoGithub />
              </SocialIcon>
              <SocialIcon
                href="https://www.youtube.com/c/walissonsilva"
                target="_blank"
              >
                <IoLogoYoutube />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/walissonsilvablog/"
                target="_blank"
              >
                <IoLogoInstagram />
              </SocialIcon>
              <SocialIcon
                href="mailto:walissonsilva10@gmail.com"
                target="_blank"
              >
                <IoMailSharp />
              </SocialIcon>
            </SocialIconsContainer>
          </BannerContent>
        </HomeBannerContainer>
      </HomeBanner>

      <AboutSection />
      
      <PortfolioSection
        projects={portfolioProjects}
      />

      <BlogSection posts={posts} />

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getPortfolioProjects();
  const posts = await getPostsToHome();

  return {
    props: {
      portfolioProjects: projects,
      posts,
    },
    revalidate: 24 * 60 * 60,
  }
}
