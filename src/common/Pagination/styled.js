import styled from "styled-components";
import { ReactComponent as Vector } from "../../images/Vector.svg"

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 123px;
    margin-top: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoint.MobileMax}px) {
        margin-top: 32px;
        margin-bottom: 31px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    font-size: 14px;
    background: ${({ theme }) => theme.color.pattensblue};
    border: none;
    line-height: 19.6px;
    border-radius: 5px;
`;

export const Text = styled.p`
    font-size: 10px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.waterloo};
    align-self: center;

`;

export const PageNumber = styled.p`
        color: ${({ theme }) => theme.color.black};
        font-weight: 600;
        font-size: 10px;
        line-height: 24px;
        align-self: center;
`;

export const StyledVector = styled(Vector)`
  width: 7px;
  height: 11px;
  color: ${({ theme }) => theme.color.scienceblue};
`;

