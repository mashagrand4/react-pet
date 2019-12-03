import React, {Component} from 'react';
import Input from '../common/Input';
import connect from "react-redux/es/connect/connect";
import {updateSearchQuery} from '../../actions/search';

class SearchInput extends Component {
    constructor(props) {
        super(props);
    }

    updateField(value) {
        this.props.updateSearchQuery(value);
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
        value: state.search.value,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateSearchQuery: (value) => dispatch(updateSearchQuery(value)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);