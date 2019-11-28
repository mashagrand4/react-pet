
import React from 'react';

class Input extends React.Component {

    handleChange = event => {
        this.props.onChange(event.target.value);
    };

    render() {
        return <input onChange={this.handleChange} />;
    }
}

export default Input;