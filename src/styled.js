import styled from "styled-components";

export const Nav = styled.nav`
    background: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    height: 94px;
    max-width: 1920px;
    margin: 0%, auto;
    display: flex;
    align-items: center;
`;

export const Title = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1.5px;
    margin-left: 52px;
    text-transform: capitalize;
    display: flex;
    align-items: center;
`;

export const Video = styled.img`
    align-items: center;
    width: 40px;
    margin-right: 12px;
`;

export const List = styled.ul``;