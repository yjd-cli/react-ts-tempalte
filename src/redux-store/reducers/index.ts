import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import history from '../history';
import common from './common';

let rootReducer = combineReducers({
    router: connectRouter(history),
    common,
});

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer;