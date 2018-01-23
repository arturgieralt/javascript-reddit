import * as Types from './actionTypes';
import * as Api from '../api/mockRedditApi';


export function loadArticleListSuccess (articles) {
    debugger;
    return {type: Types.LOAD_ARTICLE_LIST_SUCCESS, articles};
}

export function loadArticleList(){
    return function(dispatch){
        return Api.RedditApi.getArticles()
        .then(articles => {
            dispatch(loadArticleListSuccess(articles));
        })
        .catch (err => {
            throw(err);
        });
    }
}


export function loadArticleSuccess (article) {
    debugger;
    return {type: Types.LOAD_ARTICLE_SUCCESS, article};
}

export function loadArticle(articleId){
    return function(dispatch){
        return Api.RedditApi.getArticle(articleId)
        .then(article => {
            dispatch(loadArticleSuccess(article));
        })
        .catch (err => {
            throw(err);
        });
    }
}
