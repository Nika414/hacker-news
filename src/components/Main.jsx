import React from 'react';
import Card from './Card';
import RefreshButton from './RefreshButton';

export default function Main() {
  return (
    <div className="main">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <RefreshButton name="Refresh" />
    </div>
  );
}
