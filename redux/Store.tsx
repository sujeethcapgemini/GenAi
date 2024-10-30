import { createStore, applyMiddleware } from 'redux';
import { thunk, ThunkMiddleware } from 'redux-thunk';
import { combineReducers } from 'redux';
import authReducer, { AuthState } from './reducers/authReducer';
import dataReducer, { DataState } from './reducers/dataReducer';
import { AuthActionTypes } from './actions/authActions'; 
import { FetchDataActions } from './actions/dataActions';

export interface RootState {
    auth: AuthState;
    data: DataState;
}

// Combine reducers
const rootReducer = combineReducers<RootState>({
    auth: authReducer,
    data: dataReducer,
});

const middleware: Array<ThunkMiddleware<RootState, AuthActionTypes | FetchDataActions>> = [thunk];

// Create the store
const Store = createStore(rootReducer, applyMiddleware(...middleware));

// Type for dispatch
export type AppDispatch = typeof Store.dispatch;

export default Store;
