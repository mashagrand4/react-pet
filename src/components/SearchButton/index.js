import React, { Component } from 'react';
import Button from '../common/Button';

export default class SearchButton extends Component {
    render() {
        return(
            <Button
                name={'Search'}/>
                //onClick={this.searchByField}/>
        )
    }
}