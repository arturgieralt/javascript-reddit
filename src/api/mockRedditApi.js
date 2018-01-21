export const GO_PREV = "before";
export const GO_NEXT = "after";
const cachedArticleLists = {};
const cachedArticles = {};
const comments = [
    {
        articleId: "testId",
        login: "gieri",
        text: "text bla bla bla bla"
    },
    {
        articleId: "testId",
        login: "gieri",
        text: "text bla bla bla bla2"
    }
];

// prevents from calling reddit too often
function cacheAndReturnFetchResults(url, cacheObject){
    if(cacheObject.hasOwnProperty(url)){
        return new Promise((resolve, reject) => {
            resolve(cacheObject[url]);
        });
    } else{
        return fetch(url)
        .then(resp => {
            cacheObject[url] =  resp.json();
            return cacheObject[url];
        })
        .catch();
    }
}

export class RedditApi {

    static getArticles(count = "" , articleId = "" , actionType){
        debugger;
        let url = "";

        switch (actionType){
            case GO_NEXT:
                url = "https://www.reddit.com/r/javascript.json?count=" + count + "&after=" + articleId;
                break;
            case GO_PREV:
                url = "https://www.reddit.com/r/javascript.json?count=" + count + "&before=" + articleId;
                break;
                default:
                url = "https://www.reddit.com/r/javascript.json";
        }

        return cacheAndReturnFetchResults(url, cachedArticleLists);

    }

    static getArticle(articleId){

        let url = "https://www.reddit.com/r/javascript/comments/" + articleId + ".json";
        return cacheAndReturnFetchResults(url, cachedArticles);
    
    }

}

export class CommentApi {

    static getAllComments(articleId){
        
        return new Promise((resolve, reject) => {
            debugger;
            resolve(comments.filter(comment => {
               return comment.articleId === articleId;
            }));
        });
    }

    static addComment(comment){
        comment = Object.assign({}, comment);
        debugger;
        return new Promise((resolve, reject) => {
            const minLoginLength = 1;
            const minTextLength = 10;
            if (comment.login.length >= minLoginLength && comment.text.length >= minTextLength ){
                comments.push(comment);
                resolve(comment);
            } else {
                reject(`Check length of your comment (min len = ${minTextLength}) 
                or login (min len = ${minLoginLength})`);
            }       
        });
    }
}

