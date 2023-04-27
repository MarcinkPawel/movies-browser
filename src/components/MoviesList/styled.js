import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  background: ${({ theme }) => theme.color.mercury};
  margin: 40px auto 0;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 320px;
    width: 100%;
    margin: 24px auto;
  }
`;

export const Header = styled.h1`
  font-weight: 600;
  font-size: 36px;
  color: ${({ theme }) => theme.color.woodsmoke};
  line-height: 1.2;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;
export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(316px, 1fr));
  grid-template-rows: 1fr;
  gap: 24px;
`;

export const Item = styled.section`
margin: 0;

@media (max-width: ${({theme})=>theme.breakpoints.mobileMax}px) {
        width: 100%;
    }
`;