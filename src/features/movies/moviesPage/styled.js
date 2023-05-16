import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax());
    gap: 24px;
    justify-items: center;
    align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    gap: 16px;
    justify-content: center;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  margin: 24px auto 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 16px;
  }
`;

