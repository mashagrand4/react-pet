import React, {Component} from 'react';
import Input from '../common/Input';
import connect from "react-redux/es/connect/connect";
import {updateSearchQuery, fetchItems} from '../../actions/search';
import {bindActionCreators} from "redux";

class SearchInput extends Component {
    updateField(value) {
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
    // return {
    //     updateSearchQuery: (value) => dispatch(updateSearchQuery(value)),
    //     fetchVideo: ({value, list, nextPageToken}) => dispatch(fetchItems({value, list, nextPageToken}))
    // };

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);