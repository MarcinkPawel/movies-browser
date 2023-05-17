import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto 0;
  padding: 16px;
  max-width: 1368px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 320px;
    width: 100%;
    margin: 24px auto;
  }
`;

export const Header = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: minmax(200px, 1fr);
  }
`;
