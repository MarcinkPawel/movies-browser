import error from "./Error.svg"
import { Icon, MainInfo, Wrapper, Info, Button } from "./styled"

export const Error = () => {
    return (
        <>
        <Wrapper>
            <Icon
                src={error}
                alt="error"
            />
            <MainInfo>
                Ooops! Something went wrong... 
            </MainInfo>
                <Info>
                    Please check your network connection <br/> and try again
                </Info>
            <Button>Back to home page</Button>    
        </Wrapper>
        </>
    );
};