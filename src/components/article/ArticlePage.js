import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as articleActions from '../../actions/articleActions';
import * as commentActions from '../../actions/commentActions';
import CommentForm from '../comment/CommentForm';
import CommentBox from '../comment/CommentBox';


class ArticlePage extends React.Component {
    constructor(props,context){
        super(props,context);
        //debugger;
        this.state = {
            article: Object.assign({}, this.props.article),
            errors: {},
            comment: {
                    author: "Anonymous",
                    articleId: "",
                    text: ""
                },
            articleComments: this.props.articleComments
        };

        this.addComment= this.addComment.bind(this);
        this.updateCommentState = this.updateCommentState.bind(this);

    }

    componentWillReceiveProps(nextProps){
           debugger;
            let comment = Object.assign({}, this.state.comment);
            comment.articleId = nextProps.article.id;


            this.setState({
                article: Object.assign({}, nextProps.article),
                comment: comment
            });
    }


    updateCommentState(event){
        const fieldName = event.target.name;
        let comment = Object.assign({}, this.state.comment);
        comment[fieldName] = event.target.value;
        return this.setState({comment: comment});
    }

    addComment(event){
        event.preventDefault();
        this.props.commentActions.addComment(this.state.comment);
        let articleComments = [...this.state.articleComments, Object.assign({}, this.state.comment)];
        return this.setState({articleComments:articleComments});
    }


    render(){
        const {article} = this.props;
        debugger;
        if(article){
            return(
                <div>
                    <div className="jumbotron col-md-6 center-block">
                        <h4>Article:</h4>
                        <h1><a href={article.url}>{article.title}</a></h1>
                        <div>{article.selftext}</div>
                    </div>
                    <div className="col-md-6 center-block">
                        <CommentForm
                            comment={this.state.comment}
                            onSave={this.addComment}
                            onChange={this.updateCommentState}
                            />
                    </div>
                    <div jumbotron="col-md-6 center-block">
                    {this.state.articleComments.map((comment, index) =>
                        <CommentBox key={comment.articleId + "_" + index} author={comment.author} text={comment.text} />
                        )}
                    </div>

                </div>
                );
        }
        else {
            return(
                <div>
                    <div>Your article is loading!</div>
                </div>
                );
        }
        
    }
}

ArticlePage.propTypes = {
    article: PropTypes.object.isRequired,
    articleActions: PropTypes.object.isRequired,
    commentActions: PropTypes.object.isRequired,
    articleComments: PropTypes.array.isRequired
};

//context global variable used by redux, router (passing context to all components)
ArticlePage.contextTypes = {
    router: PropTypes.object
};

function getArticleById(articles, id){
    const article = articles.filter(article => article.id === id);
    if (article.length) return article[0];
    return {id : '', title: '', selftext: ''};
}

function getCommentsById(comments, articleId){
    const articleComments =  comments.filter(comment => comment.articleId === articleId);
    if (articleComments.length) return articleComments;
    return [];
}

function mapStateToProps(state, ownProps){
    const articleId = ownProps.params.id; // getting param from the path
    let article;
    let articleComments = [];

if(articleId && state.articlesData.length > 0){
    article = getArticleById(state.articlesData, articleId);
    articleComments = getCommentsById(state.comments, articleId);
}

    return {
        article:article  ,
        articleComments: articleComments
    };
}

function mapDispatchToProps(dispatch){
    return{
        articleActions: bindActionCreators(articleActions, dispatch),
        commentActions: bindActionCreators(commentActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);