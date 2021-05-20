import styled from "styled-components";

export const HomeBanner = styled.section`
  padding: 4rem 0;
  background-color: ${props => props.theme.colors["background-primary"]};
  border-radius: 0 0 150px 0;
  margin-top: 80px;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.55);
  border-top: 1px solid ${props => props.theme.colors["alpha"] + '33'};

  @media (max-width: 1192px) {
    padding: 4rem;
  }
`

export const HomeBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1160px;

  margin: 0 auto;
`

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 100%;
  }
`

export const BannerContent = styled.div`
  flex: 2;
  margin-left: 4rem;
  
  h1 {
    font-size: 6rem;
    font-weight: 600;
  }
  
  h3 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 0.4rem;
    padding-left: 0.75rem;
    font-family: 'JetBrains Mono', monospace;
    
    strong {
      font-weight: 500;
      background: ${props => `linear-gradient(to right,
        ${props.theme.colors["primary-color"] + '77'}, ${props.theme.colors["secondary-color"] + '77'})`};
      padding: 0rem 0.4rem;
      font-family: 'JetBrains Mono', monospace;
    }
  }
  `

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  margin-top: 3rem;
  padding-left: 0.75rem;
`

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => `linear-gradient(to right,
    ${props.theme.colors["primary-color"]}, ${props.theme.colors["secondary-color"]})`};
  cursor: pointer;
  transition: filter 0.15s, transform 0.15s;

  display: flex;
  justify-content: center;
  align-items: center;

  & + div {
    margin-left: 1.2rem;
  }

  svg {
    font-size: 20px;
  }

  &:hover {
    filter: brightness(1.3);
    transform: translateY(-4px);
    transition: filter 0.15s, transform 0.15s;
  }
`