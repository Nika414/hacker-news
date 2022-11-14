/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import api from '../utils/api';
import { renderCards } from '../store/cardsSlice';

export default function CardList() {
  const cards = useSelector((state) => state.cards.cards);
  const dispatch = useDispatch();
  useEffect(() => {
    api.getCardsInfo()
      .then((data) => {
        dispatch(renderCards(data.slice(0, 100)));
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(cards);
  return cards
    // eslint-disable-next-line react/no-array-index-key
    .map((cardId, i) => <Card key={i} cardId={cardId} />);
}
