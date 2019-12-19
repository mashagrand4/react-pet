import React from 'react';
import PropTypes from "prop-types";
import { Button } from './common/Button';

const SearchButton = ({ fetchVideo }) => {
  return <Button name="Search" onClickHandler={fetchVideo} />;
};

SearchButton.propTypes = {
  fetchVideo: PropTypes.func,
};

SearchButton.defaultProps = {
  fetchVideo: null,
};

export default SearchButton;
