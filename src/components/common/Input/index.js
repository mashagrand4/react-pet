import React from 'react';
import styled from 'styled-components';

export default class Input extends React.Component {
    render() {
        return (
            <InputField
                placeholder={this.props.placeholder}
                onChange={(e) => this.props.onChangeHandler(e.target.value)}
                onKeyPress={(e) => {
                    if(e.key === "Enter") {
                        return this.props.onKeyPressHandler(e.target.value)
                    }
                }
                }
            />
        )
    }
}

const InputField = styled.input`
    padding: 0.7rem;
    width: 50%;
    border: 0;
    border-right: 1px solid #c1c1c1;
`;