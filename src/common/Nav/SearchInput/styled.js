import styled from "styled-components";

export const SearchStyled = styled.div`
    display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.white};
  width: 432px;
  height: 48px;
  border-radius: 33px;
  border-color: 1px, solid, ${({ theme }) => theme.color.mystic};
  margin: 23px, 292px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    height: 44px;
    width: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 44px;
    width: 100%;
    font-size: 13px;
    line-height: 16.9px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    height: 44px;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    height: 44px;
    width: auto;
  }
`;

export const Magnifier = styled.img`
    height: 24px;
    width: 24px;
    margin: 12px 24px;
`;

export const InputStyled = styled.input`
    border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    align-items: center;
    color: ${({ theme }) => theme.color.waterloo};
  }
`;