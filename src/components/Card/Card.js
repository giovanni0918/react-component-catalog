// @flow
import * as React from 'react';
import styles from './Card.css';

type Props = { className: string, heading: string, copy: string, children: Array<Object> };

const Card = ({
  className,
  heading,
  copy,
  children
}: Props): React.Node => {
  return (
    <div className={className}>
      <h3>
        {heading}
      </h3>
      <p>
        {copy}
      </p>
      {children}
    </div>
  )
};
export default Card;