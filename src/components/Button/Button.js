import React, { Component } from 'react';


const Button = ({
  className,
  onClick,
  textContent
}) => (
    <button
      className={className}
      onClick={onClick}>
      {textContent}
    </button>
  );

export default Button;