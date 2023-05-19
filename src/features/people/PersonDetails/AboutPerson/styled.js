import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 23px 14px 0 14px;


  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 23px 14px 0 14px;
  }
`;

export const Tile = styled.article`
  display: grid;
  grid-template-columns: minmax(auto, 399px) 1fr;
  grid-template-rows: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 0px;
  background: ${({ theme }) => theme.color.white};
  padding: 40px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  max-width: 1368px;
  margin-top: 56px;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 0 16px;
    padding: 16px;
    margin-top: 0;
    grid-template-columns:  minmax(auto, 114px) 1fr;
  }
`;

export const Image = styled.img`
  grid-area: 1 / 1 / 3 / 2;
  width: 399px;
  height: 564px;
  margin-right: 40px;
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    height: 169px;
    margin: 0;
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export const Content = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-area: 1 / 2 / 2 / 3;
    margin-left: 0;
  }
`;

export const Title = styled.div`
  font-size: 36px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 21px;
    margin-bottom: 16px;
  }
`;

export const Details = styled.div`
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;

export const Label = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.color.stormGray};
  line-height: 1.2;
  margin-bottom: 8px;
  margin-right: 11px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }

  ${({ constant }) => constant && css`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      display: block;
      font-size: 12px;
    }
  `}

  ${({ disappear }) => disappear && css`
    display: none;
  `}


`;

export const Info = styled.span`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.black};
  line-height: 22px;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Description = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  font-size: 20px;
  margin: 24px 0 0 40px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0 0 0;
    grid-area: 2 / 1 / 3 / 3;
  }
`;

export const DetailsLine = styled.p`
  display: flex;
  flex-direction: row;
`;