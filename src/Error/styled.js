import styled from "styled-components";

export const Wrapper = styled.div`
    text-align: center;
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
    //width: 426.53px;
`;

export const Button = styled.button`
    padding: 16px 24px;
    width: 181px;
    height: 51px;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.cornflowerblue};
    border-radius: 5px;
    margin-top: 24px;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    &:hover {
        scale: 1.1;
        filter: brightness(150%);
    }
`;