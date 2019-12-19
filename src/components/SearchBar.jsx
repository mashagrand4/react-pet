import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import PropTypes from "prop-types";
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import * as actions from '../actions/search';

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
      <SearchField
        onKeyPress={event => {
          if (event.key === 'Enter') {
            this.fetchVideoHandler();
          }
        }}
      >
        <SearchInput updateField={value => this.updateField(value)} />
        <SearchButton fetchVideo={this.fetchVideoHandler} />
      </SearchField>
    );
  }
}

SearchBar.propTypes = {
  value: PropTypes.string,
  nextPageToken: PropTypes.string,
  fetchItems: PropTypes.func,
  updateSearchQuery: PropTypes.func,
};

SearchBar.defaultProps = {
  value: '',
  nextPageToken:'',
  fetchItems: null,
  updateSearchQuery: null,
};

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
  bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
