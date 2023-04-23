import { Icon, Info, Wrapper } from "./styled";
import iconspinner from "./IconSpinner.svg"


export const Loader = () => {
    return (
        <Wrapper>
            <Info>
                Search results for “Mulan”
            </Info>
            <Icon src={iconspinner} />
        </Wrapper>
    );
}

