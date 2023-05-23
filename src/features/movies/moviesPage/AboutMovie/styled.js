import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 64px auto 0;
`;

export const Tile = styled.article`
  display: grid;
  margin: 14px;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  justify-content: center;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background: ${({ theme }) => theme.color.white};
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  max-width: 1368px;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 16px;
    padding: 20px;
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
  border-radius: 5px;
  margin-right: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 100%;
    height: auto;
    aspect-ratio: 2/3;
    padding: 16px;
    border-radius: 5px;
    display: grid;
    grid-template-columns: auto 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    height: auto;
    aspect-ratio: 2/3;
    margin-right: 16px;
    grid-area: 1 / 1 / 2 / 2;
    border-radius: 5px;
  }
`;

export const Content = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  width: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-area: 1 / 2 / 2 / 3;
    padding-top: 20px;
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
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 17px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.color.waterloo};
    text-align: left;
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

export const DetailsLine = styled.div`
  display: flex;
  flex-direction: row;
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
`;

export const Info = styled.span`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.black};
  line-height: 1.2;
  margin-bottom: 8px;
  word-wrap: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Description = styled.div`
  grid-area: 2 / 2 / 3 / 4;
  font-size: 20px;
  margin: 24px 0 0 0;
  line-height: 1.6;
  width: fit-content;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0 0 0;
    grid-area: 2 / 1 / 3 / 3;
  }
`;

export const Star = styled.img`
  width: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
  }
`;

export const Rate = styled.span`
  font-size: 22px;
  line-height: 1.3;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 19px;
    line-height: 1.7;
  }
`;

export const Votes = styled.span`
  font-size: 16px;
  line-height: 1.5;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

export const TotalRate = styled.p`
  font-size: 14px;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;
