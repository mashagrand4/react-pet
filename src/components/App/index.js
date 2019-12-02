import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import Input from '../common/Input';
import youtube from "../../apis/youtube";
import List from "../List";
import './index.scss';
import Provider from "react-redux/es/components/Provider";
import store from "../../store/configureStore";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
           value: null,
           videos: [],
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
                maxResults: 5,
                key: 'AIzaSyBuLAVkPg9jKirjQ9IbHme3wz1vv23pp9s',
                q: this.state.value
            }
        });
        this.setState({
            videos: response.data.items,
        });
    };

    render() {
        return (
            <Provider store={store}>
                <div>
                    <SearchBar>
                        <Input update={value => this.updateField(value)}/>
                        <button className='search-bar__button' onClick={this.searchByField}>Search</button>
                    </SearchBar>
                    <List videos={this.state.videos}/>
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

injectGlobal`
  body {
    padding: 0;
    margin: 0;
  }
`;

// padding: 0.5rem;
// // width: 30%;
// // padding: 0.5rem;
// // overflow: hidden;
// // height: 200px;
// // height: 150px;