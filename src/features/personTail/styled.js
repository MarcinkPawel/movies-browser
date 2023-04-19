import styled from "styled-components";

export const PersonTail = styled.div`
  width: 208px;
  height: 339px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
`;

export const PersonImage = styled.img`
  width: 177px;
  height: 231px;
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: 5px;
`;

export const FullName = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 29px;
  text-align: center;
  padding: 12px 0 8px 0;
  color: ${({ theme }) => theme.color.woodsmoke};
`;

export const FunctionName = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 27px;
  text-align: center;
  color: ${({ theme }) => theme.color.waterloo};
`;
