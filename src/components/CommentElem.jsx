import React, { useState } from 'react';

import '../index.scss';

import Comments from './Comments';

function CommentElem({ comment }) {
  const [visibleElements, setVisibleElements] = useState(true);

  const onChangeVisible = () => {
    setVisibleElements(!visibleElements);
  };

  return (
    <>
      {comment.comments ? <div onClick={onChangeVisible} className='comments__line'></div> : null}

      <div className='comments__item'>
        <div className='comments__content'>
          <div>
            <img
              className='comments__image'
              src='https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png'
              alt=''
            />
            <p className='comments__author'>{comment.author}</p>
          </div>
          <p className='comments__text'>{comment.text}</p>
        </div>
        <div className='comments__like-wrapper'>
          <button className='comments__like-btn'>like</button>
        </div>
      </div>

      {visibleElements ? (
        <div className='comments__reply'>
          {comment.comments && comment.comments.length ? (
            <Comments comments={comment.comments} />
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default CommentElem;
