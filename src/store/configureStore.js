import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import sagas from '../sagas'


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;