import React from 'react';
import Comment from './Comment';

export default function Comments({ commentIds }) {
  return (
    <div className="comments">
      {commentIds
        .map((commentId) => commentId && (<Comment key={commentId} commentId={commentId} />))}
    </div>
  );
}
