
export const Nav = () => (
    <Nav>
          <Title>
            <Video src={video}/>
            Movies Browser
          </Title>
          <List>
            <Li>MOVIES</Li>
            <Li>PEOPLE</Li>
          </List>
          <Search>
            <Magnifier src={magnifier}/>
            <InputStyled
              placeholder={`Search for movies..`}
            />
          </Search>
        </Nav>
)