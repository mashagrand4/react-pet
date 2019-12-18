import React, { Fragment, Component } from 'react';
import styled from 'styled-components';
import InfiniteLoader from 'react-infinite-loader';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import { fetchItems, updateSearchQuery } from '../actions/search';
import VideoItem from './VideoItem';

class List extends Component {
  handleVisit = () => {
    const { fetchItems, nextPageToken, value } = this.props;
    fetchItems(value, nextPageToken);
  };

  render() {
    const videoItems = this.props.list.map((video, index) => {
      return <VideoItem key={index} video={video} />;
    });
    return (
      <>
        <SearchResults>{videoItems}</SearchResults>
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
  console.log(state.search);
  return {
    ...state.search,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateSearchQuery, fetchItems }, dispatch);

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
