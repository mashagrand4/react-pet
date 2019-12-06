import React, { Component } from 'react';
import Button from '../common/Button';
import { asyncFetchVideo } from "../../actions/search";
import connect from "react-redux/es/connect/connect";

class SearchButton extends Component {
    render() {
        return(
            <Button
                name={'Search'}
                fetch={(value) => this.props.fetchVideo(value)}/>
        )
    }
}

const mapStateToProps = state => {
    console.log('GETSTATEINBUTTON', state.search);
    return {
        value: state.search.value,
        list: state.search.list,
        nextPageToken: state.search.nextPageToken
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchVideo: (value) => asyncFetchVideo(value)(dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);