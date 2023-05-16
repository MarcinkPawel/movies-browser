import { Wrapper, Text, Number, Button, StyledVector, ButtonText } from "./styled";
import React from "react";

export const Pagination = (
    {pageNumber, 
    totalPages, 
    goToFirstPage, 
    goToNextPage, 
    goToPreviousPage, 
    goToLastPage }) => {
        
    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === totalPages;

    return (
        <Wrapper>
            <Button
                onClick={goToFirstPage}
                disabled={isFirstPage}
            >
                <StyledVector
                    disabled={isFirstPage}
                />
                <StyledVector
                    mobile="true"
                    disabled={isFirstPage}
                />
            <ButtonText>First</ButtonText>   
            </Button>
            <Button
                onClick={goToPreviousPage}
                disabled={isFirstPage}
            >
                <StyledVector
                disabled={isFirstPage}
                />
            <ButtonText>Previous</ButtonText>   
            </Button>
            <Text>Page </Text>
            <Number>{pageNumber}</Number>
            <Text>of </Text>
            <Number>{totalPages}</Number>
            <Button
                onClick={goToNextPage}
                disabled={isLastPage}
            > 
            <ButtonText>Next</ButtonText>   
                <StyledVector
                    right="true"
                    disabled={isLastPage}
                />
            </Button>
            <Button>
            <ButtonText>Last</ButtonText>               
                <StyledVector
                    right="true"
                    disabled={isLastPage}
                />
                <StyledVector
                    right="true"
                    mobile="true"
                    disabled={isLastPage}
                />
            </Button>
        </Wrapper>
    )
};