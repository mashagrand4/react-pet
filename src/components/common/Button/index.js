import React from 'react';
import youtube from '../../../apis/youtube';

export default class Button extends React.Component {
    handleSearch = async () => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyBuLAVkPg9jKirjQ9IbHme3wz1vv23pp9s',
                q: 'lala'
            }
        });
        console.log(response);
    };

    render() {
        return (
            <button onClick={this.handleSearch}>Search</button>
        )

    }
}