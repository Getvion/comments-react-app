import React from 'react';
import '../index.scss';
import CommentElem from './CommentElem';

function Comments({ comments }) {
  return (
    <>
      {comments.map((comment) => {
        return (
          <div className='comments__list' key={Math.floor(Math.random() * 100)}>
            <CommentElem comment={comment} />
          </div>
        );
      })}
    </>
  );
}

export default Comments;
