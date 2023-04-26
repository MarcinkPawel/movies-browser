import styled from "styled-components";

export const Tile = styled.article`
  background: ${({ theme }) => theme.color.white};
  width: 324px;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px ${({ theme }) => theme.color.heather};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 16px;
    width: 288px;
    height: auto;
  }
`;

export const Poster = styled.img`
  height: 434px;
  width: 292px;
  border-radius: 5px;
  margin-bottom: 16px;
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
  margin: 0;

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
  margin: 0;
  padding: 0;
`;

export const MovieGenre = styled.div`
  width: 292;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
  flex-flow: wrap;
`;

export const MovieType = styled.span`
  background-color: ${({ theme }) => theme.color.mystic};
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
    line-height: 11px;
    padding: 4px 8px;
  }
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 16px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 8px;
  }
`;

export const Star = styled.img`
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
  }
`;

export const Rate = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 17px;
  }
`;

export const Votes = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 17px;
  }
`;
