import React from 'react';
import styled from 'styled-components';
import Input from '../common/Input';
import youtube from "../../apis/youtube";
import List from "../List";
import Provider from "react-redux/es/components/Provider";
import store from "../../store/configureStore";
import InfiniteLoader from 'react-infinite-loader'
import videos from "../../reducers/videos";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           value: null,
           videos: [],
           video: null
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
        this.setState({
            videos: response.data.items,
            video: response.data.items[0],
        });
    };

    handleVisit () {
        let videos = this.state.videos;
        videos = videos.concat(videos);
        this.setState({
            videos,
        });
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <SearchBar>
                        <Input update={value => this.updateField(value)}/>
                        <SearchButton onClick={this.searchByField}>Search</SearchButton>
                    </SearchBar>
                    <List videos={this.state.videos}/>
                    <InfiniteLoader
                        loaderStyle={{
                            ['border-left-color']: '#dc2626',
                            ['border-right-color']: '#dc2626'
                        }}
                        onVisited={ () => this.handleVisit() } />
                </div>
            </Provider>
        )
    }
}

const SearchBar = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #dc2626;
`;

const SearchButton = styled.button`
    display: inline-block;
    padding: 0.7rem;
    border: 0;
`;