import React, {Component} from 'react';
import Input from '../common/Input';
import connect from "react-redux/es/connect/connect";
import * as actionTypes from "../../constants/videos";
import fetchVideo from '../../actions/videos';

class SearchInput extends Component {
    constructor(props) {
        super(props);
    }

    updateField(value) {
        // console.log('PROOOOPS', this.props);
        const { fetchVideo } = this.props;
        console.log(this.props);
        fetchVideo(value);
        //this.props.dispatch(fetchVideo(value));
    }


    render() {
        console.log(this.props);
        const { value } = this.props;
        console.log(value);
        return (
            <div>
                <Input
                    placeholder='Search..'
                    update={(value) => this.updateField(value)}/>
                <div>
                    {value}
                </div>
            </div>


        )

    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        value: state.videos.value,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // explicitly forwarding arguments
        fetchVideo: (value) => dispatch(fetchVideo(value)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);