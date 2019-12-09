import React, {Fragment, Component} from 'react';
import Item from "../Item";
import styled from 'styled-components';
import InfiniteLoader from "react-infinite-loader";
import connect from "react-redux/es/connect/connect";
import {fetchItems} from "../../actions/search";

class List extends Component {
    handleVisit = () => {
        this.props.fetchVideo(this.props);
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

const mapDispatchToProps = dispatch => {
    return {
        fetchVideo: ({value, list, nextPageToken}) => dispatch(fetchItems({value, list, nextPageToken})),
    }
};

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