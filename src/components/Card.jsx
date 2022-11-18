/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import api from '../utils/api';
import Loader from './Loader';

Moment.globalFormat = 'DD.MM.YYYY, hh:mm:ss';

export default function Card({ cardId, onCardClick }) {
  const [card, setCard] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.getCardInfo(cardId).then((data) => {
      setCard(data);
    })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleCardClick() {
    onCardClick(card);
  }
  return (
    <div className="card" onClick={handleCardClick}>
      {isLoading ? <Loader /> : (
        <>
          <h2 className="card__title">
            {card.title}
          </h2>
          <div className="card__publication-info">
            <div className="rating__container">
              <svg className="rating__logo" fill="var(--color-gray)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
              </svg>
              <p className="rating__amount">
                {card.score}
              </p>
            </div>
            <div className="author__container">
              <svg className="author__logo" fill="var(--color-gray)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path className="author__logo" d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
              </svg>
              <p className="author__text">{card.by}</p>
            </div>
          </div>
          <p className="card__publication-date"><Moment unix>{card.time}</Moment></p>
        </>
      )}

    </div>

  );
}
