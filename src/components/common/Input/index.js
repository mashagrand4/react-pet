import React from 'react';
import './index.scss';

class Input extends React.Component {
    render() {
        return (
            <input
                placeholder='Search...'
                onChange={(e) => this.props.update(e.target.value)}
            />
        )
    }
}

export default Input;