import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";


export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  padding: 8px 12px;
  color: ${({ theme }) => theme.color.white};

  &.active {     
    border: 1px solid white;
    border-radius: 45px;
  };

  ${({ activeClass }) => activeClass && css`{
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 29px;
  }`}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    padding: 8px 12px;
    font-size: 12px;
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    padding: 8px ;
    font-size: 12px;
    gap: 12px;
  }
`;

export const Wrapper = styled.nav`
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  padding: 22px 16px;
  position: sticky;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: column;
    padding: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    margin: 0;
    width: 100%;
    background: ${({ theme }) => theme.color.black};
    padding: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    width: 100%;
    padding: 12px;
  }
`;

export const ContentWidth = styled.div`
  max-width: 1400px;
  margin: auto;
  display: grid;
  gap: 16px;
  grid-template-columns: auto minmax(205px, 432px);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    width: 100%;
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  margin-left: 10px;
  text-transform: capitalize;
  display: flex;
  align-items: flex-start;
  flex-shrink: 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    justify-self: space-between;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
    line-height: 21px;
    letter-spacing: -0.5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    font-size: 13px;
    line-height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}px) {
    font-size: 13px;
    line-height: 20px;
  }
`;

export const Video = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 20px;
    height: 20px;
  }
`;

export const List = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 8px 12px;
    align-items: center;
    display: flex;
    margin-left: 19px;
  }
`;


export const Section = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    justify-content: space-between;
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    justify-content: space-between;
    gap: 10px;
  }
`;