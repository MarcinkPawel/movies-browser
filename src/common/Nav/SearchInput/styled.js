import styled from "styled-components";

export const SearchStyled = styled.div`
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
    padding: 12px 0 12px;
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
    align-items: center;

    &:focus {
        outline: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 13px;
        line-height: 1.3;
    }
`;