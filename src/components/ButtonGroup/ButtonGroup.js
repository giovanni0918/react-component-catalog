// @flow
import * as React from 'react';
import styles from './ButtonGroup.css';
import Button from '../Button/Button.js';

type ButtonProps = { className: string, onClick: Function, textContent: string };
type Props = { className: string, buttons: Array<ButtonProps> };

const ButtonGroup = ({
  className,
  buttons
}: Props): React.Node => {
  return (
    <div className={className}>
      {buttons.map((button, buttonId, arr) => (
        <Button key={buttonId}
          className={button.className}
          onClick={button.onClick}
          textContent={button.textContent} />
      ))}
    </div>
  )
};

export default ButtonGroup;