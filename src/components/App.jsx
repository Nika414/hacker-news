/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-bind */
import React, { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import api from '../utils/api';
import NewsPost from './NewsPost';
import Footer from './Footer';
import { renderCardIds } from '../store/cardIdsSlice';
import RefreshButton from './RefreshButton';

function App() {
  const main = useRef('');
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  function getContent() {
    api.getCardsIds()
      .then((data) => dispatch(renderCardIds(data.slice(0, 100))))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }
  // const cardIds = useSelector((state) => state.cardIds.cardIds);

  useEffect(() => {
    // const interval = setInterval(() => { getContent(); }, 10000);
    // return () => {
    //   clearInterval(interval);
    // };
    getContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    // Запоминаем последнюю функцию
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Устанавливаем интервал
    useEffect(() => {
      const interval = () => {
        savedCallback.current();
      };

      if (delay !== null) {
        const id = setInterval(interval, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };
  useInterval(() => {
    // Любая твоя логика тут
    setIsLoading();
    getContent();
  }, 10000);
  function handleScroll() {
    main.current.scrollIntoView({ behavior: 'smooth' });
  }
  function handleCardClick(card) {
    history.push(`/item/${card.id}`);
  }

  function handleRefresh() {
    setIsLoading(true);
    getContent();
  }

  return (
    <div className="root">
      <Switch>
        <Route exact path="/">
          <Header name="Hacker News" onScroll={handleScroll} />
          <Main ref={main} onCardClick={handleCardClick} isLoading={isLoading} />
          <RefreshButton onClick={handleRefresh} name="Refresh" />
        </Route>
        <Route exact path="/item/:cardId">
          <NewsPost />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
