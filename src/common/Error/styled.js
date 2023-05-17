import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 195px;
`;

export const Icon = styled.img`
  width: 100px;
  height: 90px;
`;

export const MainInfo = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;
  margin-top: 40px;
`;

export const Info = styled.h2`
  margin-top: 24px;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
`;

export const Button = styled(Link)`
  padding: 16px 24px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.scienceblue};
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  margin-top: 24px;

  &:hover {
    scale: 1.1;
    filter: brightness(150%);
  }
`;
