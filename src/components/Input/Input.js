// @flow
import React from 'react';
import styles from './Input.css';

type Props = {
  className: string,
  disabled: ?boolean,
  id: string,
  includeLabel: boolean,
  max: ?number,
  min: ?number,
  name: string,
  onBlur: ?Function,
  onChange: Function,
  onFocus: ?Function,
  required: ?boolean,
  step: ?number,
  type: string
};

const Input = ({
  className, disabled, id, includeLabel, max, min, name,
  onBlur, onChange, onFocus, required, step, type
}: Props) => (

    includeLabel ? (
      <div>
        <label htmlFor={id}>{`${name}: `}</label>
        <input
          className={className}
          disabled={disabled}
          id={id}
          max={max}
          min={min}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={name}
          required={required}
          step={step}
          type={type}
        />
      </div>
    ) : (
        <input
          className={className}
          disabled={disabled}
          id={id}
          max={max}
          min={min}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={name}
          required={required}
          step={step}
          type={type}
        />
      )
  );
export default Input;