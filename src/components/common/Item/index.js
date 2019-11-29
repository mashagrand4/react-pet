import React from 'react';

export default class Item extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.video.snippet.thumbnails.medium.url}/>
                <div>{this.props.video.title}</div>
            </div>
        )
    }
}