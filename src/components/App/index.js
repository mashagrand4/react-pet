import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import youtube from "../../apis/youtube";
import List from "../common/List";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           value: null,
           videos: [],
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
        this.setState({
            videos: response.data.items,
        });
    };

    render() {
        return (
            <div>
                <div>
                    <Input update={value => this.updateField(value)}/>
                    <button onClick={this.searchByField}>Search</button>
                </div>
                <div>
                    <List videos={this.state.videos}/>
                </div>
            </div>
        )
    }
}