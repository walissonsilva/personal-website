import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.3s;
  }
`

export const Header = styled.header`

`

export const CoverImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`

export const Title = styled.h2`

`

export const Content = styled.main`
  padding: 1rem;
`

export const Subtitle = styled.p`
  margin-bottom: 3rem;
  font-size: 1.1rem;
  font-weight: 300;
`

export const Level = styled.span`
  display: block;
  width: fit-content;
  padding: 5px 10px;
  background-color: ${props => props.theme.colors["success"] + '55'};
  border: 2px solid ${props => props.theme.colors["success"]};
  color: ${props => props.theme.colors.white};
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 400;
  /* margin-bottom: 0.5rem; */
  position: absolute;
  bottom: 1rem;
  left: 1rem;
`