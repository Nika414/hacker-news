import React, { forwardRef } from 'react';
import RefreshButton from './RefreshButton';
import CardList from './CardList';

const Main = forwardRef((props, ref) => (
  <div className="main" ref={ref}>
    <h2 className="main__title">Newsfeed</h2>
    <CardList onCardClick={props.onCardClick} />
    <RefreshButton name="Refresh" />
  </div>
));
export default Main;
