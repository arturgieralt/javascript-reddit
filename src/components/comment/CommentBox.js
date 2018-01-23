import React , {PropTypes} from 'react';

// normally I should extract inpout and textarea as separate components

const CommentBox = ({author, text}) => {
    return (
        <div>
            <h3>Auhor: {author}</h3>
            <h5>Text:{text}</h5>

        </div> 

    );
};

CommentBox.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default CommentBox;