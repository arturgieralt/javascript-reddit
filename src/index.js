/* eslint-disable no-console */
import * as redditApi from './api/mockRedditApi';
debugger;
// let jsonObj = redditApi.RedditApi.getArticles();
// jsonObj.then(obj => console.log(obj));

// let jsonObj2 = redditApi.RedditApi.getArticle("7rvy32");
// jsonObj2.then(obj => console.log(obj));

let jsonObj3 = redditApi.CommentApi.addComment(    {
    articleId: "testId",
    login: "",
    text: "text bla bla bla bla23"
});

jsonObj3.then(obj => {
    console.log(obj);
    let jsonObj4 = redditApi.CommentApi.getAllComments("testId");

    jsonObj4.then(obj => console.log(obj));
}).catch (err => console.log(err));


