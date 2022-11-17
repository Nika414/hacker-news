/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-danger */
/* eslint-disable no-unused-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import api from '../utils/api';
import { createMarkup } from '../utils/utils';
import Comments from './Comments';

Moment.globalFormat = 'DD.MM.YYYY, hh:mm:ss';

export default function Comment({ commentId }) {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    api.getComment(commentId).then((data) => {
      data && data.type && setComment(data);
    });
  }, []);

  console.log();
  return (
    <div className="comment__container">
      <div className="comment__info">
        <span className="comment__author">{comment.by}</span>
        <span className="comment__date"><Moment unix>{comment.time}</Moment></span>
      </div>
      {comment && !comment.deleted && (
        <>
          <p className="comment__text" dangerouslySetInnerHTML={createMarkup(comment.text)} />
          {comment.kids && <Comments commentIds={comment.kids} />}
        </>
      )}
    </div>
  );
}
