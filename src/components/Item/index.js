import React from 'react';
import styled from 'styled-components';;

export default class Item extends React.Component {
    render() {
        return (
            this.props.video.id.kind === 'youtube#video' ?
                <ItemWrapper>
                    <ItemPicture src={this.props.video.snippet.thumbnails.medium.url}/>
                    <div>{this.props.video.snippet.title}</div>
                </ItemWrapper>
                : null
        )
    }
}

const ItemWrapper = styled.div`
    width: calc(100%/3 - 1.2rem);
    text-align: center;
    margin: 0.5rem 0.5rem;
    background-color: #f7f7f7;
    border: 1px solid #eaeaea;
    padding: 1rem 0;
    border-radius: 0.3rem;
    
    @media(max-width: 768px) {
        width: calc(100%/2 - 1.2rem);
    }
    
    @media(max-width: 480px) {
        width: calc(100% - 1.2rem);
    }
    
`;

const ItemPicture = styled.img`
    width: 100%;
    display: block;
    margin: 0 auto;
`;