import React from 'react';

const Button = (props) => {
  return (
      <button onClick={e => props.handleClick(e)}>{props.title}</button>
  );
};

export default Button;