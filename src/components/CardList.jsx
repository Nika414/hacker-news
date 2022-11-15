/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';

export default function CardList({ onCardClick }) {
  const cards = useSelector((state) => state.cards.cards);

  console.log(cards);
  return cards
    // eslint-disable-next-line react/no-array-index-key
    .map((cardId, i) => <Card key={i} cardId={cardId} onCardClick={onCardClick} />);
}
