import React, { Component } from 'react';
import styled from 'styled-components';
import InfiniteLoader from 'react-infinite-loader';
import connect from 'react-redux/es/connect/connect';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/search';
import VideoItem from './VideoItem';
import ChannelItem from './ChannelItem';

class List extends Component {
  handleVisit = () => {
    const { fetchMoreItems, nextPageToken, value } = this.props;
    fetchMoreItems(value, nextPageToken);
  };

  render() {
    const { list } = this.props;
    const items = list.map(item => {
      switch (item.kind) {
        case 'youtube#video':
          return <VideoItem key={item.id} video={item} />;
        case 'youtube#channel':
          return <ChannelItem key={item.id} channel={item} />;
        default:
          return null;
      }
    });
    return (
      <>
        <SearchResults>{items}</SearchResults>
        {list.length ? (
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

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  nextPageToken: PropTypes.string,
  fetchMoreItems: PropTypes.func,
};

List.defaultProps = {
  list: [],
  value: '',
  nextPageToken:'',
  fetchMoreItems: null,
};

const mapStateToProps = state => {
  return {
    ...state.search,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

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
