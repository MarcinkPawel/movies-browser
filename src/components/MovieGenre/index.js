import styled, { css } from "styled-components";

export const MovieGenre = styled.div`
  width: 292;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: ${ aboutMovie  => aboutMovie ? '16px' : '8px'};
  flex-flow: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
   gap: 8px;
  }
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
