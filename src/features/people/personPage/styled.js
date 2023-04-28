import styled from "styled-components";

export const PersonTile = styled.div`
  width: 208px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.heather};
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05, 1.05);
    transition:  1s ease-out 0s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 136px;
  }
`;

export const PersonImage = styled.img`
  width: 177px;
  height: 231px;
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: 5px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 120px;
    height: 178px;
  }
`;

export const FullName = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 29px;
  text-align: center;
  padding: 12px 0 8px 0;
  color: ${({ theme }) => theme.color.woodsmoke};
  overflow-wrap: break-word;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const FunctionName = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 27px;
  text-align: center;
  color: ${({ theme }) => theme.color.waterloo};
 
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 18px;
  }
`;