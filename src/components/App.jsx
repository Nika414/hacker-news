/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import { renderCards } from '../store/cardsSlice';
import api from '../utils/api';
import NewsPost from './NewsPost';

function App() {
  const main = useRef('');
  const history = useHistory();
  const [selectedCard, setSelectedCard] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    api.getCardsInfo()
      .then((data) => {
        dispatch(renderCards(data.slice(0, 100)));
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleScroll() {
    main.current.scrollIntoView({ behavior: 'smooth' });
  }
  function handleCardClick(card) {
    setSelectedCard(card);
    history.push(`/item/${card.id}`);
  }
  return (
    <div className="root">
      <Switch>
        <Route exact path="/">
          <Header name="Hacker News" onScroll={handleScroll} />
          <Main ref={main} onCardClick={handleCardClick} />
        </Route>
        <Route exact path="/item/:id">
          <NewsPost card={selectedCard} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
