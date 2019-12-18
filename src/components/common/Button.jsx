import styled from "styled-components";
import React from "react";

export const Button = ({name, onClickHandler}) => {
    return (
        <ButtonField onClick={(e) => {
            console.log('button', e);
            return onClickHandler(e.target.value)}}>
            {name}
        </ButtonField>
    )
};

const ButtonField = styled.button`
    display: inline-block;
    padding: 0.7rem;
    border: 0;
`;