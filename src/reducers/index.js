import {combineReducers} from 'redux';
import articles from './articleListReducer'; 
import articlesData from './articleDataReducer';

const rootReducer = combineReducers({
    articles,
    articlesData
});

export default rootReducer;