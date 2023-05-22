import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1368px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 56px auto 0 auto;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    max-width: 500px;
    width: 100%;
    margin: 44px auto 0 auto;
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 320px;
    width: 100%;
    margin: 24px auto 0 auto;
    padding: 7px;

  }
`;

export const Header = styled.h1`
  align-self: flex-start;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: 36px;
  color: ${({ theme }) => theme.color.black};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 24px;
    margin-bottom: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const ErrorPicture = styled.img`
  width: 60%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
  }
`;
