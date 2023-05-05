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