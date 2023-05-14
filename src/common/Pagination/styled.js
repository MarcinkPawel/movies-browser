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
    gap: 8px;
    font-size: 14px;
    font-weight: 400;
    align-items: center;
    border-radius: 5px;
    color: ${({theme}) => theme.color.woodsmoke};
    background: ${({theme}) => theme.color.pattensBlue};
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
        gap: 4px;
    };
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

// export const StyledVector = styled(Vector)`
//   width: 7px;
//   height: 11px;
//   color: ${({ theme }) => theme.color.scienceblue};

//   @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
//     width: 5px;
//     height: 8px;
//   }

//     ${({ right }) => right && css`
//     transform: rotate(180deg);
//     `}

//   ${({ mobile }) => mobile && css`
//     display: none;
  
//     @media (max-width: ${({ theme }) => theme.breakpoint.mobielMax}px) {
//       display: block;
//     }
//   `}

//   ${({ disabled }) => disabled && css`
//     fill: ${({ theme }) => theme.color.waterloo};
//   `}
// `;