import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './common/Input';

const SearchInput = ({ updateField }) => {
  return (
    <Input
      placeholder="Search.."
      onChangeHandler={value => updateField(value)}
    />
  );
};

SearchInput.propTypes = {
  updateField: PropTypes.func,
};

SearchInput.defaultProps = {
  updateField: null,
};

export default SearchInput;
