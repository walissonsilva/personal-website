import styled from "styled-components";

export const Container = styled.article`
  margin: 5rem auto 2rem;
  max-width: 100%;
`

export const PostHeader = styled.header`
  width: 100%;
`

export const PostTitle = styled.h1`
  font-size: 4rem;
  line-height: 1.15;
  font-weight: 500;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 530px) {
    font-size: 2.4rem;
  }
`

export const PostSubtitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${props => props.theme.colors.alpha};

  @media (max-width: 768px) {
    font-size: 1.35rem;
  }

  @media (max-width: 530px) {
    font-size: 1.25rem;
  }
`

export const PostDataContainer = styled.div`
  display: flex;
  align-items: center;
  
  margin-top: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const PostData = styled.span`
  display: flex;
  align-items: center;

  color: ${props => props.theme.colors.alpha};
  font-size: 1rem;

  svg {
    font-size: 1.2rem;
    margin-right: 0.45rem;
  }

  & + span {
    margin-left: 2rem;
  }

  @media (max-width: 600px) {
    & + span {
      margin-left: 0;
      margin-top: 0.6rem;
    }
  }
`

export const Level = styled.span`
  display: block;
  width: fit-content;
  padding: 2px 10px;
  background-color: ${props => props.theme.colors["success"] + '55'};
  border: 2px solid ${props => props.theme.colors["success"]};
  color: ${props => props.theme.colors.white};
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 400;
`

export const Content = styled.main`
  margin: 3rem auto 0;
  color: ${props => props.theme.colors.alpha};

  p {
    line-height: 1.5;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 400;
  }

  strong {
    font-weight: 600;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
    margin: 0 0 1rem;
    display: block;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0 0 1rem;
    display: block;
  }
  
  h4 {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0 0 1rem;
    display: block;
  }

  ul, ol {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    font-weight: 400;
    color: ${props => props.theme.colors.white};
  }

  * + h1, * + h2, * + h3,
  * + h4, * + h5 {
    margin-top: 2rem;
  }

  pre {
    background-color: ${props => props.theme.colors["background-primary"]};
    border-radius: 10px;
    padding: 1rem;
    font-family: 'JetBrains Mono', monospace;
    color: ${props => props.theme.colors.white};
    margin-bottom: 1rem;
    overflow-x: auto;
  }

  img {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    margin: 2rem auto;
    border-radius: 10px;

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  iframe {
    display: flex;
    justify-content: center;
    width: 760px;
    height: 400px;
    margin: 2rem auto;

    @media (max-width: 768px) {
      width: 100%;
      height: 300px;
    }

    @media (max-width: 500px) {
      height: 200px;
    }
  }

  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.3s;
    color: ${props => props.theme.colors['secondary-color']};

    &:hover {
      color: ${props => props.theme.colors['primary-color']};
      transition: color 0.3s;
    }
  }

  * + ul,
  * + ol {
    margin-top: -0.85rem;
  }
`