import React, { forwardRef } from 'react';
import CardList from './CardList';

const Main = forwardRef((props, ref) => (
  <div className="main" ref={ref}>
    <h2 className="main__title">Newsfeed</h2>
    <CardList isLoading={props.isLoading} onCardClick={props.onCardClick} />
  </div>
));
export default Main;
