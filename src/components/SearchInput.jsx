import React, {Component} from 'react';
import {Input} from './common/Input';
import connect from "react-redux/es/connect/connect";
import {updateSearchQuery, fetchItems} from '../actions/search';
import {bindActionCreators} from "redux";

class SearchInput extends Component {
    updateField(value) {
        const { updateSearchQuery } = this.props;
        updateSearchQuery(value);
    }

    render() {
        return (
            <Input
                placeholder='Search..'
                onChangeHandler={(value) => this.updateField(value)}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.search
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateSearchQuery, fetchItems }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);