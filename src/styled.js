import styled from "styled-components";

export const Nav = styled.nav`
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

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 100%;
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
`;

export const Li = styled.li`
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    padding: 13px 24px;
    text-decoration: none;
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

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin-bottom: 23px;
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