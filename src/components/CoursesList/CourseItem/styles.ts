import styled from "styled-components";

export const CourseItemContainer = styled.a`
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors["background-secondary"]};

  display: flex;
  align-items: flex-start;
  gap: 2rem;
  cursor: pointer;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03, 1.03);
    transition: transform 0.3s;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Thumbnail = styled.img`
  max-width: 40%;
  min-width: 350px;
  border-radius: 10px;

  @media (max-width: 1000px) {
    max-width: 100%;
    min-width: auto;
  }
`;

export const CourseInfo = styled.div`
  flex: 1;
`;

export const CourseTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
`;

export const Category = styled.span`
  display: block;
  width: fit-content;
  padding: 2px 10px;
  background-color: ${(props) => props.theme.colors["info"] + "55"};
  border: 2px solid ${(props) => props.theme.colors["info"]};
  color: ${(props) => props.theme.colors.white};
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0.4rem 0 2rem;
`;

export const Description = styled.div`
  font-size: 1rem;
`;
