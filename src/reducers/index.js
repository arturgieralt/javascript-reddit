import {combineReducers} from 'redux';
import articles from './articleListReducer'; 
import articlesData from './articleDataReducer';
import comments from './commentReducer';

const rootReducer = combineReducers({
    articles,
    articlesData,
    comments
});

export default rootReducer;