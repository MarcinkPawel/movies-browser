import styled from "styled-components";
import { Link, NavLink } from "react-router-dom"

export const StyledLink = styled(Link)`
    text-decoration: none;
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
    width: 100%;
    margin: 0%, auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-basis: auto;
    justify-content: space-around;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
        padding: 32px 16px 16px 16px;
        flex-direction: column;
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
    color: ${({ theme }) => theme.color.white};
`;

export const Video = styled.img`
    align-items: center;
    width: 40px;
    margin-right: 12px;
`;

export const List = styled.ul`
    margin-left: 104px;
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
        margin: auto;
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

