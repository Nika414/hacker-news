import React from 'react';

export default function ScrollButton({ onScroll }) {
  function handleScrollClick() {
    onScroll();
  }

  return (
    <button className="scroll-button" type="button" onClick={handleScrollClick}>
      <p className="scroll-button__text">EXPLORE</p>
      <svg className="scroll-button__logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
        <path className="scroll-button__logo" d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
      </svg>
      <span className="scroll-button__rings" />
      <span className="scroll-button__rings" />
      <span className="scroll-button__rings" />
    </button>
  );
}
