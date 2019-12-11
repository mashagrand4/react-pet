import React, { Component } from 'react';
import Button from '../common/Button';
import {fetchItems, updateSearchQuery} from "../../actions/search";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";

class SearchButton extends Component {
    fetchVideoHandler = () => {
        console.log(this.props);
        const { fetchItems, value, nextPageToken } = this.props;
        fetchItems(value, nextPageToken);
    };

    render() {
        return(
            <Button
                name={'Search'}
                onClickHandler={this.fetchVideoHandler}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state.search
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateSearchQuery, fetchItems }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);