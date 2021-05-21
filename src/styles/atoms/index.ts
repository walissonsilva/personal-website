import styled from "styled-components";

export const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 600;

  hr {
    position: relative;
    display: block;
    width: 50px;
    height: 4px;
    top: 0px;
    left: 0;
    background: ${props => `linear-gradient(to right,
      ${props.theme.colors["primary-color"]}, ${props.theme.colors["secondary-color"]})`};
  }
`

export const SectionSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;

  hr {
    position: relative;
    display: block;
    width: 50px;
    height: 2px;
    top: 0px;
    left: 0;
    background: ${props => `linear-gradient(to right,
      ${props.theme.colors["primary-color"]}, ${props.theme.colors["secondary-color"]})`};
  }
`