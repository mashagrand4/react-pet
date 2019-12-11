import React, {Fragment, Component} from 'react';
import Item from "../Item";
import styled from 'styled-components';
import InfiniteLoader from "react-infinite-loader";
import connect from "react-redux/es/connect/connect";
import {fetchItems, updateSearchQuery} from "../../actions/search";
import {bindActionCreators} from "redux";

class List extends Component {
    handleVisit = () => {
        const { fetchItems, nextPageToken } = this.props;
        fetchItems(nextPageToken);
    };

    render() {
        const videoItems = this.props.list.map((video, index) => {
            return <Item key={index} video={video}/>
        });
        return (
            <Fragment>
                <SearchResults>
                    {videoItems}
                </SearchResults>
                {
                    this.props.list.length
                        ?
                        <InfiniteLoader
                            loaderStyle={{
                                borderLeftColor: '#dc2626',
                                borderRightColor: '#dc2626'
                            }}
                            onVisited={() => this.handleVisit()}/>
                        :
                        <EmptySearchList>No videos</EmptySearchList>
                }
            </Fragment>
        )
    }
};

const mapStateToProps = state => {
    return {
        ...state.search
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({ updateSearchQuery, fetchItems }, dispatch);

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