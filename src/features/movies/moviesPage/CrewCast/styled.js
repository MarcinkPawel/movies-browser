import styled from "styled-components";

export const Wrapper = styled.div`
  //display: flex;
  //flex-direction: column;
  max-width: 1368px;
  background: ${({ theme }) => theme.color.mercury};
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
  grid-template-rows: 1fr;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
  }
`;
