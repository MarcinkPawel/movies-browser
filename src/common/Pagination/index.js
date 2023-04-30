import { Wrapper, Text, PageNumber, Button, StyledVector } from "./styled";
import React from "react";

export const Pagination = () => {
    return (
        <Wrapper>
            <Button>
                <StyledVector/>
                First
            </Button>
            <Button>
                <StyledVector/>
                Previous
            </Button>
            <Text>Page </Text>
            <PageNumber></PageNumber>
            <Text>of </Text>
            <PageNumber></PageNumber>
            <Button> 
                Next
            </Button>
            <Button>Last</Button>
        </Wrapper>
    )
};