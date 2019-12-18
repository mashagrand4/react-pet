import React from 'react';
import { Input } from './common/Input';

export const SearchInput = ({updateField}) => {
    return (
        <Input
            placeholder='Search..'
            onChangeHandler={(value) => updateField(value)}/>
    )
};