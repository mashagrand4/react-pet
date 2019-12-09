import React, { Component } from 'react';
import Button from '../common/Button';
import {fetchItems} from "../../actions/search";
import connect from "react-redux/es/connect/connect";

class SearchButton extends Component {
    constructor(props) {
        super(props);
    }

    fetchVideoHandler = (event) => {
        this.props.fetchVideo(this.props);
    };

    render() {
        return(
            <Button
                name={'Search'}
                onClickHandler={this.fetchVideoHandler}
                onKeyPressHandler={this.fetchVideoHandler}/>
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
        fetchVideo: ({value, list, nextPageToken}) => dispatch(fetchItems({value, list, nextPageToken})),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);