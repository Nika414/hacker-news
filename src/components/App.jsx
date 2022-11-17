/* eslint-disable no-debugger */
/* eslint-disable import/named */
/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import api from '../utils/api';
import NewsPost from './NewsPost';
import { renderCards } from '../store/cardsSlice';
import Footer from './Footer';

function App() {
  const main = useRef('');
  const history = useHistory();
  const [selectedCard, setSelectedCard] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    const getCards = async () => {
      const cardIds = await api.getCardsIds();
      const cardRequests = cardIds.slice(0, 100).map((id) => api.getCardInfo(id));
      const cardPromises = await Promise.allSettled(cardRequests);
      const cards = await cardPromises.map((item) => item.value);
      dispatch(renderCards(cards));
    };
    getCards();
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
          <NewsPost cardId={selectedCard.id} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
