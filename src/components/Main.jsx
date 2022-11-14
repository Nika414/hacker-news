/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import Card from './Card';
import RefreshButton from './RefreshButton';
import api from '../utils/api';
import { renderCards } from '../store/cardsSlice';
import CardList from './CardList';

export default function Main() {
  return (
    <div className="main">
      <h2 className="main__title">Newsfeed</h2>
      <CardList />
      {/* <Card title="Court Case Could Make It a Crime
      to Be a Journalist in Texas" rating="123 points"
      date="August 16, 2002" author="Vasilii Ivanovich Petrov" />
      <Card />
      <Card />
      <Card />
      <Card /> */}
      {/* cards.map((cardId, i) => <Story key={i} storyId={storyId} />); */}
      <RefreshButton name="Refresh" />
    </div>
  );
}
