import React, {Fragment} from 'react';
import styled from 'styled-components';
import youtube from "../../apis/youtube";
import List from "../List";
import InfiniteLoader from 'react-infinite-loader'
import SearchBar from "../SearchBar";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           value: null,
           videos: [],
           nextPageToken: null,
        };

        this.searchByField = this.searchByField.bind(this);
    }

    updateField(value) {
        this.setState({
            ...this.state,
            value: value
        });
    }

    async searchByField() {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 12,
                key: 'AIzaSyBuLAVkPg9jKirjQ9IbHme3wz1vv23pp9s',
                q: this.state.value
            }
        });
        console.log(response.data);
        this.setState({
            videos: response.data.items,
            nextPageToken: response.data.nextPageToken,
        });
    };

    async handleVisit () {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 12,
                key: 'AIzaSyBuLAVkPg9jKirjQ9IbHme3wz1vv23pp9s',
                q: this.state.value,
                pageToken: this.state.nextPageToken,
            }
        });
        this.setState({
            videos: this.state.videos.concat(response.data.items),
            nextPageToken: response.data.nextPageToken,
        });
    }

    render() {
        return (
            <Fragment>
                <SearchBar/>
                    {/*<Input update={value => this.updateField(value)}/>*/}
                    {/*<SearchButton onClick={this.searchByField}>Search</SearchButton>*/}
                <List videos={this.state.videos}/>
                {
                    this.state.videos.length ?
                        <InfiniteLoader
                            loaderStyle={{
                                borderLeftColor: '#dc2626',
                                borderRightColor: '#dc2626'
                            }}
                            onVisited={ () => this.handleVisit() } />
                        : <EmptySearchList>No videos</EmptySearchList>
                }
            </Fragment>
        )
    }
}

const EmptySearchList = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    color: #9c9c9c;
`;