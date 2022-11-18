/* eslint-disable import/no-cycle */
import React from 'react';
import Comment from './Comment';

export default function Comments({ commentIds, isOpen }) {
  return (
    <div className={`subcomments ${isOpen ? 'subcomments__visible' : ''}`}>
      {commentIds
        .map((commentId) => commentId && (<Comment key={commentId} commentId={commentId} />))}
    </div>
  );
}
