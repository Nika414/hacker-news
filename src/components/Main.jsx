import React from 'react';
import Card from './Card';
import RefreshButton from './RefreshButton';

export default function Main() {
  return (
    <div className="main">
      <h2 className="main__title">Newsfeed</h2>
      <Card title="Court Case Could Make It a Crime to Be a Journalist in Texas" rating="123 points" date="August 16, 2002" author="Vasilii Ivanovich Petrov" />
      <Card />
      <Card />
      <Card />
      <Card />
      <RefreshButton name="Refresh" />
    </div>
  );
}
