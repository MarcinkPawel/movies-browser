import styled from "styled-components";

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  height: 91px;
  justify-content: center;
  margin-top: 219px;

  animation: spin;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transform: rotate(360deg);

  @keyframes spin {
    from {
      transform: unset;
    }

    to {
      transform: translateX(360deg);
    }
  }
`;


