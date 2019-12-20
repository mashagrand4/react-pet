import React from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import connect from 'react-redux/es/connect/connect';
import PropTypes from "prop-types";
import ENTER_KEY from '../constants/commonTypes';
import SearchButton from '../components/SearchButton';
import SearchInput from '../components/SearchInput';
import * as actions from '../actions/search';

const SearchBar = props => {
  const { fetchItems, value, nextPageToken, updateSearchQuery } = props;

  const fetchVideoHandler = () => {
    fetchItems(value, nextPageToken);
  };

  const updateField = event => {
    updateSearchQuery(event.target.value);
  };

  const onKeyPressHandler = event => {
    if (event.key === ENTER_KEY) {
      fetchVideoHandler();
    }
  };

  return (
    <SearchField onKeyPress={onKeyPressHandler}>
      <SearchInput updateField={updateField} />
      <SearchButton fetchVideo={fetchVideoHandler} />
    </SearchField>
  );
};

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
