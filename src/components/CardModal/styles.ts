import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

export const CoverImage = styled.img`
  width: 100%;
`

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => `linear-gradient(to right,
    ${props.theme.colors["primary-color"] + '77'}, ${props.theme.colors["secondary-color"] + '77'})`};
  backdrop-filter: blur(2px);
  opacity: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  
  transition: opacity 0.5s;

  &:hover {
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.5s;
  }
`

export const Title = styled.h4`
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  font-weight: 600;
`

export const ModalTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.6rem;
  font-weight: 600;
`

export const ModalDescription = styled.p`
  margin: 1.8rem 0 1.8rem;
  line-height: 1.5;
  font-size: 1rem;

  p {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors['primary-color']};
    font-weight: 600;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: ${props => props.theme.colors['secondary-color']};
      transition: color 0.3s;
    }
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`