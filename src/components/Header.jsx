import React from 'react';

export default function Header({ name }) {
  return (
    <div className="header">
      <svg fill="var(--color-details)" className="header__logo" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
        <title>hackernews</title>
        <path d="M0 0v512h512v-512h-512zM272 292v108h-32v-108l-87.5-164h36.3l67.2 126 67.2-126h36.3l-87.5 164z" />
      </svg>

      <h1 className="header__main">{name}</h1>
    </div>
  );
}
