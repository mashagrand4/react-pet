import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import PropTypes from "prop-types";
import ENTER_KEY from '../constants/commonTypes';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import * as actions from '../actions/search';

class SearchBar extends Component {
  fetchVideoHandler = () => {
    const { fetchItems, value, nextPageToken } = this.props;
    fetchItems(value, nextPageToken);
  };

  updateField = (event) => {
    const { updateSearchQuery } = this.props;
    updateSearchQuery(event.target.value);
  };

  onKeyPressHandler = (event) => {
    if (event.key === ENTER_KEY) {
      this.fetchVideoHandler();
    }
  };

  render() {
    return (
      <SearchField onKeyPress={this.onKeyPressHandler}>
        <SearchInput updateField={this.updateField} />
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
