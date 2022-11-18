/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import Loader from './Loader';

export default function CardList({ onCardClick, isLoading }) {
  const cardIds = useSelector((state) => state.cardIds.cardIds);
  return (
    <>
      {isLoading ? <Loader /> : (cardIds
        .map((cardId) => <Card key={cardId} cardId={cardId} onCardClick={onCardClick} />))}
    </>
  );
}
