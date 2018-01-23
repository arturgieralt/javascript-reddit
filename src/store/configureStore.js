import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; // we want our reducers to make immutable operations
import thunk from 'redux-thunk';

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState ,
        applyMiddleware(thunk, reduxImmutableStateInvariant())   
    );
}