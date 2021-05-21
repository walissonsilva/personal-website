import { Header } from '../components/Header'
import NextHead from '../components/NextHead'

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
import { AboutSection, PortfolioSection } from '../components/HomeSections';
import { GetStaticProps } from 'next';

export default function Home() {
  return (
    <>
      <NextHead title="Home | Walisson Silva" />
      <Header />

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
                href=""
                target="_blank"
              >
                <IoMailSharp />
              </SocialIcon>
            </SocialIconsContainer>
          </BannerContent>
        </HomeBannerContainer>
      </HomeBanner>

      <AboutSection />
      <PortfolioSection />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 24 * 60 * 60,
  }
}
