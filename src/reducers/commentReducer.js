import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function commentReducer(state = initialState.comments, action){
  debugger;
    switch(action.type){
       
        case types.ADD_COMMENT_SUCCESS:
            return [...state, Object.assign({}, action.comment)];
        case types.LOAD_COMMENTS_SUCCESS:
            return [...action.comments];
        default:
            return state;
    }
}