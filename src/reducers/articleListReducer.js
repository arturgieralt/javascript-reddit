import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function articleListReducer(state = initialState.articles, action){
 //   debugger;
    switch(action.type){
       
        case types.LOAD_ARTICLE_LIST_SUCCESS:
            return action.articles.data.children;
        default:
            return state;
    }
}