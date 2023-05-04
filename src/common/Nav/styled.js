import styled from "styled-components";
import { Link, NavLink } from "react-router-dom"

export const StyledLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    padding: 8px 12px;
    color: ${({ theme }) => theme.color.white};

    &.active {
        border: 1px solid ${({ theme }) => theme.color.white};
        border-radius: 29px;
    }
`;

export const Wrapper = styled.nav`
    background: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    min-height: 94px;
    position: sticky;


    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: column;
  }
`;

export const ContentWidth = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        flex-direction: column;
        padding: 32px 16px 16px 16px;
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
    white-space: nowrap;
    color: ${({ theme }) => theme.color.white};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        justify-self: space-between;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
        line-height: 17px;
        letter-spacing: -0.5px
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
        font-size: 13px;
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

export const List = styled.ul`
    display: flex;
    align-items: center;
    flex-direction: row;
    list-style: none;
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 8px 12px;
        align-items: center;
        display: flex;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 8px 12px;
        gap: 12px;
        margin-left: 19px;
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.color.white};
    width: 432px;
    height: 48px;
    border-radius: 33px;
    border-color: 1px, solid, ${({ theme }) => theme.color.mystic};
    margin: 23px, 292px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        font-size: 13px;
        line-height: 16.9px;
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

export const Section = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 32px;
        gap: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    justify-content: space-between;
  }

`;

