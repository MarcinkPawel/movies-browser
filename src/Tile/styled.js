import styled from "styled-components";

export const Tile = styled.article`
    background: ${({ theme }) => theme.color.white};
    padding: 40px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: flex;
    flex-direction: row;
    row-gap: 40px;
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
    font-size: 18px;
    color: ${({ theme }) => theme.color.stormGray};
    line-height: 1.2;
    margin-bottom: 8px;
`

export const Tags = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 16px -8px;
`;

export const Tag = styled.li`
    background: ${({ theme }) => theme.color.mystic};
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
    margin: 8px;
    border-radius: 5px;
`;

export const Description = styled.p`
    font-size: 20px;
    margin: 24px 0 0 0;
    line-height: 1.6;
`;

export const Star = styled.img`
    width: 24px;
    margin-right: 8px;
`;

export const Rate = styled.div`
    display: flex;
`;

export const RateNumber = styled.p`
    font-size: 22px;
    line-height: 1.3;
    margin-right: 8px;
    font-weight: 500;
`;

export const RateDetails = styled.p`
    font-size: 14px;
    line-height: 1.3;
    margin: 0px;
`;