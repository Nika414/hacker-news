/* eslint-disable react/jsx-no-bind */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import Comments from './Comments';
import { createMarkup } from '../utils/utils';
import RefreshButton from './RefreshButton';
import api from '../utils/api';
import Loader from './Loader';

Moment.globalFormat = 'DD.MM.YYYY, hh:mm:ss';

export default function NewsPost() {
  const { cardId } = useParams();
  const [card, setCard] = useState({});
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  function getCardContent() {
    api.getCardInfo(cardId).then((data) => setCard(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }
  useEffect(() => {
    getCardContent();
  }, []);
  function handleGoBack() {
    history.goBack();
  }

  function handleRefresh() {
    setIsLoading(true);
    getCardContent();
  }

  return (
    <div className="news-post">
      <div className="news-post__header">
        <Link className="news-post__header-link" to="/">
          <svg fill="var(--color-main-orange)" className="header__logo" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
            <title>hackernews</title>
            <path d="M0 0v512h512v-512h-512zM272 292v108h-32v-108l-87.5-164h36.3l67.2 126 67.2-126h36.3l-87.5 164z" />
          </svg>
          <h2 className="news-post__header-title">HackerNews</h2>
        </Link>
      </div>
      {isLoading ? <Loader /> : (
        <>
          <div className="news-post__container">
            <svg className="news-post__goback-logo" onClick={handleGoBack} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M18.885 3.515c-4.617-4.618-12.056-4.676-16.756-.195l-2.129-2.258v7.938h7.484l-2.066-2.191c2.82-2.706 7.297-2.676 10.073.1 4.341 4.341 1.737 12.291-5.491 12.291v4.8c3.708 0 6.614-1.244 8.885-3.515 4.686-4.686 4.686-12.284 0-16.97z" />
            </svg>
            <div className="news-post__main-info">

              <h3 className="news-post__title">
                {card.title}
              </h3>
              <svg className="news-post__logo author__logo" fill="var(--color-gray)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
              </svg>
              <p className="news-post__text author__text">{card.by}</p>
            </div>
            {card.url ? (
              <a className="news-post__link" href={card.url}>
                <span>{card.url}</span>
              </a>
            ) : (<p className="news-post__post" dangerouslySetInnerHTML={createMarkup(card.text)} />) }
            <div className="news-post__additional-info">
              <p className="news-post__comments-counter">{ card.descendants === 1 ? `${card.descendants} comment` : `${card.descendants} comments` }</p>
              <p className="news-post__publication-date"><Moment unix>{card.time}</Moment></p>
            </div>
          </div>
          <h4 className="news-post__comments-title">Comments</h4>
          {card.kids
            ? <Comments commentIds={card.kids ? card.kids : ''} /> : <p className="news-post__comments-empty">There&#8217;s nothing here yet..</p>}
          <RefreshButton onClick={handleRefresh} name="Refresh" />
        </>
      )}
    </div>
  );
}
