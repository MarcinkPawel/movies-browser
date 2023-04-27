import styled from "styled-components";

export const Tile = styled.article`
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: flex;
    flex-direction: row;
    row-gap: 40px;
    max-width: 1368px;
    margin: 24px auto 40px;
`;

export const Image = styled.img`
    width: 312px;
    height: 464px;
    margin-right: 40px;
`;

export const Content = styled.div``;

export const Title = styled.div`
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 24px;
`;

export const Year = styled.div`
    font-size: 22px;
    margin-bottom: 24px;
`;

export const Details = styled.div`
    margin-bottom: 24px;
`;

export const DetailText = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.color.stormGray};
    line-height: 1.2;
    margin-bottom: 8px;
`

export const Description = styled.p`
    font-size: 20px;
    margin: 24px 0 0 0;
    line-height: 1.6;
`;