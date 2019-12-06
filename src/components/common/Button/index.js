import React, { Component } from 'react';
import styled from "styled-components";

export default class Button extends Component {
    render() {
        return (
            <ButtonField onClick={(e) => this.props.fetch(e.target.value)}>
                    {this.props.name}
                </ButtonField>
        )
    }
}

const ButtonField = styled.button`
    display: inline-block;
    padding: 0.7rem;
    border: 0;
`;