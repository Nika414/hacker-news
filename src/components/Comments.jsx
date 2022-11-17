/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import api from '../utils/api';

export default function Comments({ commentIds }) {
  return (
    <div className="comments__container">
      {commentIds.map((commentId, i) => commentId && (<Comment key={i} commentId={commentId} />))}
    </div>
  );
}
