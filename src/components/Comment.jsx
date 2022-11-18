/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import api from '../utils/api';
import { createMarkup } from '../utils/utils';
import Subcomments from './Subcomments';
import Loader from './Loader';

Moment.globalFormat = 'DD.MM.YYYY, hh:mm:ss';

export default function Comment({ commentId }) {
  const [comment, setComment] = useState([]);
  const [subcommentOpen, setSubcommentЩpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function getCommentContent() {
    api.getComment(commentId).then((data) => {
      data && !data.deleted && setComment(data);
    })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }
  useEffect(() => {
    getCommentContent();
  }, []);

  function handleOpenSubcomments() {
    setSubcommentЩpen(!subcommentOpen);
  }
  return (
    <div className="comment">
      {isLoading ? <Loader /> : (
        <>
          <div className="comment__info">
            <span className="comment__author">{comment.by}</span>
            <span className="comment__date"><Moment unix>{comment.time}</Moment></span>
          </div>
          {comment && !comment.deleted && (
          <>

            <p onClick={handleOpenSubcomments} className={`comment__text ${comment.kids ? 'comment__text-cursor' : ''}`} dangerouslySetInnerHTML={createMarkup(comment.text)} />
            {comment.kids && (
            <svg onClick={handleOpenSubcomments} className="subcomments__open-logo" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291zm-7.564.289h5.446l-2.718 3.522z" fillRule="nonzero" />
            </svg>
            )}

            {comment.kids && <Subcomments isOpen={subcommentOpen} commentIds={comment.kids} />}
          </>

          )}
        </>
      )}

    </div>
  );
}
