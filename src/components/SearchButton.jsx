import React from 'react';
import {Button} from './common/Button';

export const SearchButton = ({fetchVideo}) => {
    return (
        <Button
            name={'Search'}
            onClickHandler={fetchVideo}/>
    )
};