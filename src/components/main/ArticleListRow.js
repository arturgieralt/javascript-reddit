import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ArticleListRow = ({article, onOpen}) => {
    return (
        <tr>
            <td><a href={article.data.url}>Open</a></td>
            <td><Link onClick={() => {onOpen(article.data.id)}} to={'/' + article.data.id}>{article.data.title}</Link></td>
            <td>{article.data.author}</td>
            </tr>

    );
};

ArticleListRow.propTypes = {
    article: PropTypes.object.isRequired,
    onOpen: PropTypes.func.isRequired
};

export default ArticleListRow;