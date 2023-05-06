import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;
  position: relative;
`;

export const PosterSpace = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: linear-gradient(
      270deg,
      #000000 14.11%,
      rgba(0, 0, 0, 0.873268) 15.08%,
      rgba(0, 0, 0, 0.720529) 16.51%,
      rgba(0, 0, 0, 0.294577) 19.99%,
      rgba(0, 0, 0, 0.159921) 21.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      #000000 13.6%,
      rgba(0, 0, 0, 0.984059) 14.58%,
      rgba(0, 0, 0, 0.967732) 15.44%,
      rgba(0, 0, 0, 0.865569) 16.3%,
      rgba(0, 0, 0, 0.230315) 22.87%,
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106473) 63.17%,
      rgba(0, 0, 0, 0.235359) 68.85%,
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
    );
`;

export const Poster = styled.img`
  max-width: 100%;
  height: auto;
  z-index: -1;
`;

export const Section = styled.section`
  position: absolute;
  left: 14%;
  bottom: 7%;
`;

export const Title = styled.span`
  font-size: 64px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 77px;
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
   font-size: 24px;
   margin-bottom: 8px;
   line-height: 29px;
  }
`;

export const RateStyledA = styled.p`
    color: ${({ theme }) => theme.color.white};
    font-weight: 500;
    font-size: 30px;
    line-height: 1.3;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      font-size: 14px;
  }
`;

export const RateStyledB = styled.p`
    color: ${({ theme }) => theme.color.white};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.2;
 
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      font-size: 10px;
  }
`;

export const Votes = styled.p`
    color: ${({ theme }) => theme.color.white};
    font-size: 16px;
    line-height: 19px;
    margin-top: 17px;
 
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
      font-size: 10px;
      line-height: 12px;

  }

`;