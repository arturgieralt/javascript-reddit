import * as types from './actionTypes';
import * as Api from '../api/mockRedditApi';



export function addCommentSuccess (comment) {
    //  debugger;
      return {type: types.ADD_COMMENT_SUCCESS, comment};
  }
  
  export function loadCommentsSuccess (comments) {
    //  debugger;
      return {type: types.LOAD_COMMENTS_SUCCESS, comments};
  }


export function addComment(comment){
    return function(dispatch, getState){
        return Api.CommentApi.addComment(comment).then(addedComment => {
                dispatch(addCommentSuccess(addedComment));
        }).catch(error => {
            throw(error);

        });
    };
}

export function loadComments(){
    return function(dispatch, getState){
        return Api.CommentApi.getComments().then(comments => {
                dispatch(loadCommentsSuccess(comments));
        }).catch(error => {
            throw(error);

        });
    };
}