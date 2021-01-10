// @flow
import * as React from 'react';
import styles from './Button.css';

type Props = { className: string, onClick: Function, textContent: string };

const Button = ({
  className,
  onClick,
  textContent
}: Props): React.Node => {
  return (
    <button
      className={className}
      onClick={onClick}>
      {textContent}
    </button>
  )
};

export default Button;