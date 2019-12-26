import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <p className="card-suit">{props.suit}</p>
      <p className="card-rank">{props.rank}</p>
    </div>
  );
};

export default Card;
