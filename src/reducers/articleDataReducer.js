import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function articleDataReducer(state = initialState.articlesData, action){
    debugger;
    switch(action.type){
       
        case types.LOAD_ARTICLE_SUCCESS:
            return [...state.filter(article => {
                return article.id !== action.article[0].data.children[0].id;
            }),
                Object.assign({}, action.article[0].data.children[0])
            ];
            
        default:
            return state;
    }
}