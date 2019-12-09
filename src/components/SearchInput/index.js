import React, {Component} from 'react';
import Input from '../common/Input';
import connect from "react-redux/es/connect/connect";
import {updateSearchQuery, fetchItems} from '../../actions/search';

class SearchInput extends Component {
    updateField(value) {
        this.props.updateSearchQuery(value);
    }

    fetchVideoHandler = (event) => {
        this.props.fetchVideo(this.props);
    };

    render() {
        return (
            <Input
                placeholder='Search..'
                onChangeHandler={(value) => this.updateField(value)}
                onKeyPressHandler={(event) => this.fetchVideoHandler(event)}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.search
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateSearchQuery: (value) => dispatch(updateSearchQuery(value)),
        fetchVideo: ({value, list, nextPageToken}) => dispatch(fetchItems({value, list, nextPageToken}))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);