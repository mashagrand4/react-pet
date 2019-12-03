import React, { Component } from 'react';
import Input from '../common/Input';
import SearchButton from "../SearchButton";
import styled from 'styled-components';

export default class SearchBar extends Component {
    render() {
        return (
            <SearchField>
                <Input
                    placeholder={'Search...'}
                    update={value => this.updateField(value)}/>
                <SearchButton/>
            </SearchField>
        )
    }
}

const SearchField = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #dc2626;
`;