import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import { SearchButton } from './SearchButton';
import { SearchInput } from './SearchInput';
import { fetchItems, updateSearchQuery } from '../actions/search';

class SearchBar extends Component {
  fetchVideoHandler = () => {
    const { fetchItems, updateSearchQuery, value, nextPageToken } = this.props;
    fetchItems(value, nextPageToken);
    updateSearchQuery('');
  };

  updateField(value) {
    const { updateSearchQuery } = this.props;
    updateSearchQuery(value);
  }

  render() {
    return (
      <SearchField
        onKeyPress={event => {
          if (event.key === 'Enter') {
            this.fetchVideoHandler();
          }
        }}
      >
        <SearchInput value={this.props.value} updateField={value => this.updateField(value)} />
        <SearchButton fetchVideo={this.fetchVideoHandler} />
      </SearchField>
    );
  }
}

const SearchField = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #dc2626;
`;

const mapStateToProps = state => {
  return {
    ...state.search,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateSearchQuery, fetchItems }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
