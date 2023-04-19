import styled from "styled-components";

export const Tile = styled.article`
  background: ${({ theme }) => theme.color.white};
  width: 324px;
  height: 650px;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px #BAC7D580;


  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
    width: 100%;
    height: auto;
    box-shadow: 0px 4px 12px 0px #bac7d580;
  }
`;

export const Poster = styled.img`
  height: 434px;
  width: 292px;
  border-radius: 5px;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    height: auto;
    margin-bottom: 0;
  }
`;

export const Title = styled.h2`
  line-height: 1.3;
  font-weight: 500;
  font-size: 22px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Year = styled.p`
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  color: ${({ theme }) => theme.color.waterloo};
  margin: 8px 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;
