/* eslint-disable react/jsx-no-bind */
import React, { useRef } from 'react';
import Header from './Header';
import Main from './Main';

function App() {
  const main = useRef('');

  function handleScroll() {
    main.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="root">
      <Header name="Hacker News" onScroll={handleScroll} />
      <Main ref={main} />
    </div>
  );
}

export default App;
