import React, {PropTypes} from 'react';
import ArticleListRow from './ArticleListRow';

const ArticleList = ({articles, onOpen}) => {
 return (
     <table className="table">
     <thead>
         <tr>
             <th>&nbsp;</th>
             <th>Title</th>
             <th>Author</th>
        </tr>
    </thead>
    <tbody>
        {articles.map(article =>
        <ArticleListRow key={article.data.id} article={article} onOpen={onOpen} />
        )}
    </tbody>
    </table>

 );
};

ArticleList.propTypes = {
    articles : PropTypes.array.isRequired,
    onOpen: PropTypes.func.isRequired
};

export default ArticleList;