import React from 'react';

export default function Header() {
  return (
    <div className="header">
      <svg fill="#ff6600" className="header__logo" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
        <title>hackernews</title>
        <path d="M0 0v512h512v-512h-512zM272 292v108h-32v-108l-87.5-164h36.3l67.2 126 67.2-126h36.3l-87.5 164z" />
      </svg>
      <h1 className="header__title">
        <span className="header__span_place_left">Hacker</span>
        <span className="header__span_place_right">News. </span>
      </h1>
      <div className="header__main-text-container">
        <p className="header__main-text">Anything that gratifies</p>
        <p className="header__main-text">One&#8217;s intellectual curiosity.</p>
      </div>
    </div>
  );
}
