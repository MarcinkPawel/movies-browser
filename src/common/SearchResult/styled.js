import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 16px;
`;

export const SearchInfo = styled.span`
  font-family: "Poppins", sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 36px;
  line-height: 43px;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-family: "Poppins", sans-serif;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: 18px;
    line-height: 22px;
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 12px;
  }
`;

export const ResultList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 16px;
  }
`;
