import React from 'react';
import Item from "../Item";
import styled from 'styled-components';

export default class List extends React.Component {
    render() {
        const videoItems = this.props.videos.map((video, index) => {
            return <Item key={index} video={video}/>
        });
        return (
            <SearchResults>
                {videoItems}
            </SearchResults>
        )
    }
};

const SearchResults = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
`;