import React from 'react';
import Item from "../Item";

export default class List extends React.Component {
    render() {
        const videoItems = this.props.videos.map((video) => {
            return <Item key={video.id.videoId} video={video}/>
        });
        return (
            <div>
                {videoItems}
            </div>
        )
    }
};