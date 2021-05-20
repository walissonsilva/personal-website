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
              <strong>Desenvolvedor</strong> Web
            </h3>
            <h3>
              & <strong>Professor</strong> de Web e Data Science
            </h3>

            <SocialIconsContainer>
              <SocialIcon>
                <IoLogoLinkedin />
              </SocialIcon>
              <SocialIcon>
                <IoLogoGithub />
              </SocialIcon>
              <SocialIcon>
                <IoLogoYoutube />
              </SocialIcon>
              <SocialIcon>
                <IoLogoInstagram />
              </SocialIcon>
              <SocialIcon>
                <IoMailSharp />
              </SocialIcon>
            </SocialIconsContainer>
          </BannerContent>
        </HomeBannerContainer>
      </HomeBanner>
    </>
  )
}
