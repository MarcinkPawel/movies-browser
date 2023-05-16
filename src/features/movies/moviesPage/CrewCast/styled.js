import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  margin: 64px auto 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 320px;
    width: 100%;
    margin: 24px auto;
    padding: 0 16px;
  }
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 36px;
  color: ${({ theme }) => theme.color.black};
  line-height: 1.2;
  margin-bottom: 24px;
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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


