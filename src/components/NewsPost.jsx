import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';

export default function NewsPost({ card }) {
  function convertDate() {
    const convertedDate = new Date(card.time * 1000).toLocaleString();
    return convertedDate;
  }

  useEffect(() => {
    api.getComment(card.kids)
      .then((data) => console.log(data));
  });

  return (
    <div>
      <div className="news-post__header">
        <Link className="news-post__header-link" to="/">
          <svg fill="#ff6600" className="header__logo" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
            <title>hackernews</title>
            <path d="M0 0v512h512v-512h-512zM272 292v108h-32v-108l-87.5-164h36.3l67.2 126 67.2-126h36.3l-87.5 164z" />
          </svg>
          <h2 className="news-post__header-title">HackerNews</h2>
        </Link>
      </div>
      <div className="news-post_container">
        <div className="news-post__main-info">
          <h3 className="news-post__title">
            {card.title}
          </h3>
          <svg className="news-post__logo author__logo" fill="var(--color-grey)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path className="news-post__logo author__logo" d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
          </svg>
          <p className="news-post__text author__text">{card.by}</p>
        </div>
        <a className="news-post__link" href={card.url}>
          <span>{card.url}</span>
        </a>
        <div className="news-post__additional-info">
          <p className="news-post__comments-counter">{ card.descendants === 1 ? `${card.descendants} comment` : `${card.descendants} comments` }</p>
          <p className="news-post__publication-date">{convertDate()}</p>
        </div>
      </div>
      <h4 className="news-post__comments-title">Comments</h4>
      <div className="comments__container">
        <p>{card.kids}</p>
      </div>

    </div>
  );
}
