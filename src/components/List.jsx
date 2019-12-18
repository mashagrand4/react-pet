import React, { Component } from 'react';
import styled from 'styled-components';
import InfiniteLoader from 'react-infinite-loader';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { fetchMoreItems, updateSearchQuery } from '../actions/search';
import VideoItem from './VideoItem';
import ChannelItem from "./ChannelItem";

class List extends Component {
  handleVisit = () => {
    const { fetchMoreItems, nextPageToken, value } = this.props;
    fetchMoreItems(value, nextPageToken);
  };

  render() {
    const items = this.props.list.map((item, index) => {
      switch(item.kind) {
        case 'youtube#video':
          return <VideoItem key={index} video={item} />;
        case 'youtube#channel':
          return <ChannelItem key={index} channel={item} />;
        default:
        return null;
      }
    });
    return (
      <>
        <SearchResults>{items}</SearchResults>
        {this.props.list.length ? (
          <InfiniteLoader
            loaderStyle={{
              borderLeftColor: '#dc2626',
              borderRightColor: '#dc2626',
            }}
            onVisited={() => this.handleVisit()}
          />
        ) : (
          <EmptySearchList>No videos</EmptySearchList>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.search,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateSearchQuery, fetchMoreItems }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);

const SearchResults = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
`;

const EmptySearchList = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  color: #9c9c9c;
`;
