import styled from "styled-components";

export const SectionContainer = styled.div`
  padding: 4rem 0;
  height: 100%;
  max-width: 1160px;
  margin: 0 auto;

  @media (max-width: 1192px) {
    padding: 4rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 2.5rem;
  }
`;

export const ButtonCenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2rem;
`;

interface FlexContainerProps {
  direction?: "row" | "column";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  alignItems?: "center" | "flex-start" | "flex-end";
}
export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "flex-start"};

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
