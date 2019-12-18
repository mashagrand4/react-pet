import React, { Component } from 'react';
import { SearchButton } from "./SearchButton";
import styled from 'styled-components';
import { SearchInput}  from "./SearchInput";
import {bindActionCreators} from "redux";
import {fetchItems, updateSearchQuery} from "../actions/search";
import connect from "react-redux/es/connect/connect";

class SearchBar extends Component {
    fetchVideoHandler = () => {
        const { fetchItems, value, nextPageToken } = this.props;
        fetchItems(value, nextPageToken);
    };

    updateField(value) {
        const { updateSearchQuery } = this.props;
        updateSearchQuery(value);
    }

    render() {
        return (
            <SearchField onKeyPress={(event) => {
                if (event.key === "Enter") {
                    this.fetchVideoHandler();
                }
            }
            }>
                <SearchInput updateField={(value) => this.updateField(value)}/>
                <SearchButton fetchVideo={this.fetchVideoHandler}/>
            </SearchField>
        )
    }
}

const SearchField = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #dc2626;
`;

const mapStateToProps = state => {
    return {
        ...state.search
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateSearchQuery, fetchItems }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);