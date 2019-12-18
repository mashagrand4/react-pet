import React, { Component } from 'react';
import SearchButton from "./SearchButton";
import styled from 'styled-components';
import SearchInput from "./SearchInput";
import {fetchItems} from "../actions/search";

export default class SearchBar extends Component {
    fetchVideoHandler = (event) => {
        fetchItems(this.props);
    };

    render() {
        return (
            <SearchField onKeyPress={(e) => {
                if (e.key === "Enter") {
                    return this.fetchVideoHandler(e.target.value)
                }
            }
            }>
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