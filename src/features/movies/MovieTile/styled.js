import styled from "styled-components";
import { Link } from "react-router-dom";

export const TileLink = styled(Link)`
  text-decoration: none;
`;

export const Tile = styled.article`
  background: ${({ theme }) => theme.color.white};
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.heather};
  display: grid;
  grid-template-rows: auto 1fr;

  &:hover {
    cursor: pointer;
    transform: scale(1.05, 1.05);
    transition: 1s ease-out 0s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
  }
`;

export const Poster = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.silver};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    height: auto;
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  line-height: 1.3;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 22px;
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Year = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.waterloo};
  margin: 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DetailsBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
`;
