import styled, {css} from "styled-components";
import { ReactComponent as Vector } from "../../images/Vector.svg"

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 40px 0 103px;
    position: static;

    @media (max-width: ${({ theme }) => theme.breakpoint.MobileMax}px) {
        gap: 8px;
        margin: 32px 44px 59px 44px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: ${({ theme }) => theme.color.pattensblue};
    border: none;
    border-radius: 5px;

&:hover {
    filter: brightness(102%);
    transform: scale(1.04);
    box-shadow: 3px 3px 3px 3px rgba(189, 195, 199);;
}

&:disabled {
    background-color: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.woodsmoke};
}
`;

export const ButtonText = styled.span`
    font-size: 14px;
    line-height: 19.6px;
    display: block;
     
    @media (max-width: ${({ theme }) => theme.breakpoint.MobileMax}px) {
        display: none;
    }
`;

export const Text = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.waterloo};
    align-self: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.MobileMax}px) {
    font-size: 10px;
  }
`;

export const Number = styled.p`
        color: ${({ theme }) => theme.color.black};
        font-weight: 600;
        font-size: 10px;
        line-height: 24px;
        align-self: center;

        @media (max-width: ${({ theme }) => theme.breakpoint.MobileMax}px) {
            font-size: 10px;
        }
`;

export const StyledVector = styled(Vector)`
  width: 7px;
  height: 11px;
  color: ${({ theme }) => theme.color.scienceblue};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 5px;
    height: 8px;
  }

    ${({ right }) => right && css`
    transform: rotate(180deg);
    `}

  ${({ mobile }) => mobile && css`
    display: none;
  
    @media (max-width: ${({ theme }) => theme.breakpoint.mobielMax}px) {
      display: block;
    }
  `}

  ${({ disabled }) => disabled && css`
    fill: ${({ theme }) => theme.color.waterloo};
  `}
`;

