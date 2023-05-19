import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.color.mercury};
  margin:auto 0;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    max-width: 320px;
    width: 100%;
    margin: 24px auto;
  }
`;

export const Header = styled.h1`
  align-self: flex-start;
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
export const ErrorPicture = styled.img`
  width: 60%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
  }
`;
