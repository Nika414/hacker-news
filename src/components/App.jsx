/* eslint-disable react/jsx-no-bind */
/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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

  useEffect(() => {
    getContent();
  }, []);

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

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
