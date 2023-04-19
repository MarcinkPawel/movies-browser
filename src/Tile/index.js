import { Image, Content, Title, Year, Tile, Tags, Tag, Description, Details, Star, Rate, RateNumber, RateDetails } from "./styled.js";
import poster from "../images/poster.png";
import star from "../images/star.svg"

export const MainTileDetails = () => {
    return (
            <Tile>
                <Image
                    src={poster}
                    alt="Plakat filmu"
                />
                <Content>
                    <Title>Mulan</Title>
                    <Year>2020</Year>
                    <Details>Production: </Details> 
                    <Details>Release date: </Details>
                    <Tags>
                        <Tag>Action</Tag>
                        <Tag>Adventure</Tag>
                        <Tag>Drama</Tag>
                    </Tags>
                    <Rate>
                        <Star
                            src={star}
                            alt="ocena"
                        />
                        <RateNumber>7,8</RateNumber>
                        <RateDetails> / 10 335 votes</RateDetails>
                    </Rate>
                    <Description>
                        A young Chinese maiden disguises herself as a male warrior in order to save her father. 
                        Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
                    </Description>
                </Content>
            </Tile>

    );
};

