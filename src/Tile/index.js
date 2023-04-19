import { Image, Content, Title, Year, Tile, Tags, Tag, Description, Details } from "./styled.js";
import poster from "../images/poster.png";

export const MainTile = () => {
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
                    <Description/>
                        A young Chinese maiden disguises herself as a male warrior in order to save her father. 
                        Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.
                    <Description/>
                </Content>
            </Tile>

    );
};

