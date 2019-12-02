import React from 'react';
import './index.scss';

export default class Item extends React.Component {
    render() {
        return (
            <div className='search-item'>
                <img src={this.props.video.snippet.thumbnails.medium.url}/>
                <div>{this.props.video.title}</div>
            </div>
        )
    }
}