import React, { useState } from 'react';
import '../index.scss';

function Comment({ comments, level }) {
  const [visibleElements, setVisibleElements] = useState(true);
  // todo Если к нему есть другие комментарии - можно сворачивать дерево этой переписки

  return (
    <>
      {comments.map((comment) => {
        return (
          <div
            className={`comments__list comments__list--level-${level}`}
            key={Math.floor(Math.random() * 100)}
          >
            <div
              onClick={() => setVisibleElements(!visibleElements)}
              className='comments__line'
            ></div>
            {comment.comments && visibleElements ? (
              <>
                <RenderReplies comment={comment} />
                <div className='comments__reply'>
                  {comment.comments && comment.comments.length ? (
                    <Comment level={level + 1} comments={comment.comments} />
                  ) : null}
                </div>
              </>
            ) : (
              <RenderReplies comment={comment} />
            )}
          </div>
        );
      })}
    </>
  );
}

function RenderReplies({ comment }) {
  // рендерить тут реплаи к главному комментарию
  return (
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
  );
}

export default Comment;
