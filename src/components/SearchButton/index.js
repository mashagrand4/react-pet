import React, { Component } from 'react';
import Button from '../common/Button';
import { asyncFetchVideo } from "../../actions/search";
import connect from "react-redux/es/connect/connect";

class SearchButton extends Component {
    constructor(props) {
        super(props);
        this.fetchVideoHandler = this.fetchVideoHandler.bind(this);
    }

    fetchVideoHandler() {
        this.props.fetchVideo(this.props.value);
    }


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
        value: state.search.value,
        list: state.search.list,
        nextPageToken: state.search.nextPageToken
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchVideo: (value) =>  {
            console.log('before sending to action thunk', value);
            return asyncFetchVideo(value)(dispatch);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);