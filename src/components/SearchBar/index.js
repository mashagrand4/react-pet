import React, { Component } from 'react';
import SearchButton from "../SearchButton";
import styled from 'styled-components';
import SearchInput from "../SearchInput";

export default class SearchBar extends Component {
    render() {
        return (
            <SearchField>
                <SearchInput/>
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