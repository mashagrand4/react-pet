import React from 'react';
import { Input } from './common/Input';

export const SearchInput = ({ updateField, value }) => {
  return <Input placeholder="Search.." inputValue={value} onChangeHandler={value => updateField(value)} />;
};
