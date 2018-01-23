import React , {PropTypes} from 'react';
import {connect} from 'react-redux';
import ArticleList from './ArticleList';
import {browserHistory} from 'react-router';
import { bindActionCreators } from 'redux';
import * as articleActions from '../../actions/articleActions';

class MainPage extends React.Component {

    constructor(props,context){
        super(props,context);
        debugger;
        this.loadArticleData = this.loadArticleData.bind(this);
   } 


   loadArticleData(articleId){
       debugger;
       this.props.actions.loadArticle(articleId);
   }


    render(){
        const {articles} = this.props;
        return (
            <div>
            <p>Articles</p>
            <ArticleList articles={articles} onOpen={this.loadArticleData}/>
            </div>

        );
    }
}

MainPage.propTypes = {
    articles: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};




function mapStateToProps(state, ownProps){

    return {
        articles: state.articles
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(articleActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);