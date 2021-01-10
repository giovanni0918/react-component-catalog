// @flow
import * as React from 'react';
import styles from './Toolbar.css';

type Props = { className: string, textContent: string, homeURL: string };

const Toolbar = ({
  className,
  textContent,
  homeURL
}: Props): React.Node => {
  return (
    <header className={className}>
      <a href={homeURL}>
        {textContent}
      </a>
    </header>
  )
};

export default Toolbar;