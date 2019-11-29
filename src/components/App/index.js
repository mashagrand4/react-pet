import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import youtube from "../../apis/youtube";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           value: null
        };

        this.searchByField = this.searchByField.bind(this);
    }

    updateField(value) {
        this.setState({
            ...this.state,
            value: value
        });
    }

    async searchByField() {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyBuLAVkPg9jKirjQ9IbHme3wz1vv23pp9s',
                q: this.state.value
            }
        });
        console.log(response);
    };

    render() {
        return (
            <div>
                <Input update={value => this.updateField(value)}/>
                <button onClick={this.searchByField}>Search</button>
            </div>
        );
    }
}