import React, {Fragment, Component} from 'react';
import SearchBar from "../SearchBar";
import List from "../List";

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <SearchBar/>
                <List/>
            </Fragment>
        )
    }
}