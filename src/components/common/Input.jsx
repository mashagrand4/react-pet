import React from 'react';
import styled from 'styled-components';

export const Input = ({ placeholder, onChangeHandler, inputValue }) => {
  return <InputField placeholder={placeholder} value={inputValue} onChange={e => onChangeHandler(e.target.value)} />;
};

const InputField = styled.input`
  padding: 0.7rem;
  width: 50%;
  border: 0;
  border-right: 1px solid #c1c1c1;
`;
