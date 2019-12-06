import React, {Fragment, Component} from 'react';
import Item from "../Item";
import styled from 'styled-components';
import InfiniteLoader from "react-infinite-loader";
import connect from "react-redux/es/connect/connect";

class List extends Component {
    render() {
        const videoItems = this.props.list.map((video, index) => {
            return <Item key={index} video={video}/>
        });
        return (
            <Fragment>
                <SearchResults>
                    {videoItems}
                </SearchResults>

                {/*<InfiniteLoader*/}
                    {/*loaderStyle={{*/}
                        {/*borderLeftColor: '#dc2626',*/}
                        {/*borderRightColor: '#dc2626'*/}
                    {/*}}*/}
                    {/*onVisited={ () => this.handleVisit() } />*/}
            </Fragment>


        )
    }
};

const mapStateToProps = state => {
    console.log(state);
    return {
        list: state.search.list,
        nextPageToken: state.search.nextPageToken,
        value: state.search.value,
    }
};

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchVideo: ({value, videos, nextPageToken}) => asyncFetchVideo({value, videos, nextPageToken})(dispatch),
//     }
// };

export default connect(mapStateToProps)(List);

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