/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { renderCards } from '../store/cardsSlice';
import api from '../utils/api';

export default function CardList({ onCardClick }) {
  const cards = useSelector((state) => state.cards.cards);
  const dispatch = useDispatch();
  console.log(cards);
  return cards
    // eslint-disable-next-line react/no-array-index-key
    .map((card, i) => <Card key={i} cardId={card.id} onCardClick={onCardClick} card={card} />);
}
