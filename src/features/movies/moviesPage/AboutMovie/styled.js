import styled from "styled-components";

export const Tile = styled.article`
    display: grid;
grid-template-columns: 344px auto;
grid-template-rows: auto auto;
grid-column-gap: 0px;
grid-row-gap: 0px;
  background: ${({ theme }) => theme.color.white};
  padding: 40px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  max-width: 1368px;
  margin: 24px auto 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 16px;
    padding: 16px;
    width: 288px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-row-start: inherit;
  }
`;

export const Image = styled.img`
grid-area: 1 / 1 / 3 / 2;
  width: 312px;
  height: 464px;
  margin-right: 40px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    height: 169px;
    margin-right: 16px;
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export const Content = styled.div`
grid-area: 1 / 2 / 2 / 3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-area: 1 / 2 / 2 / 3;
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
    margin-bottom: 4px;
  }
`;

export const Year = styled.div`
  font-size: 22px;
  margin-bottom: 24px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 17px;
    margin-bottom: 8px;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
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
  margin: 24px 0 0 0;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0 0 0;
    grid-area: 2 / 1 / 3 / 3;
  }
`;
