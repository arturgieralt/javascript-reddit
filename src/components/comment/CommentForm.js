import React , {PropTypes} from 'react';

// normally I should extract inpout and textarea as separate components

const CommentForm = ({onSave, onChange, comment}) => {
    return (
        <form>
            <h1>Add Comment</h1>
            <label 
                className="form-group" 
                htmlFor="author">Your name</label>
            <input  
                type="text"
                name="author"
                className="form-control"
                value={comment.author}
                onChange={onChange}/>
            <label 
                className="form-group" 
                htmlFor="text">Your comment</label>
            <textarea
                name="text"
                className="form-control"
                value={comment.text}
                onChange={onChange}>
                </textarea>

            <input 
                type="submit"
                value="add"
                className="btn btn-primary"
                onClick={onSave} />
        </form>   

    );
};

CommentForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired
};

export default CommentForm;