import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 40px 0 103px;
    position: static;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        gap: 8px;
        margin: 32px 44px 59px 44px;
    }
`;

export const Button = styled.button`
    display: flex;
    padding: 8px 16px;
    gap: 12px;
    font-size: 14px;
    font-weight: 400;
    align-items: center;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.pattensblue} ;
    color: ${({ theme }) => theme.color.woodsmoke};
    cursor: pointer;
    border: none;
    transition: 0.5s;

    &:hover{
        filter: brightness(0.8);
    };

    &:disabled {
        background: ${({theme}) => theme.color.mystic};
        cursor: not-allowed;
    };
    
    @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
        gap: 8px;
    };
`;

export const ButtonText = styled.span`
    font-size: 14px;
    line-height: 1.4;
    display: block;
     
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: none;
    }
`;

export const Text = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.waterloo};
    align-self: center;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 10px;
  }
`;

export const Number = styled.p`
        color: ${({ theme }) => theme.color.black};
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        align-self: center;

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            font-size: 10px;
        }
`;

