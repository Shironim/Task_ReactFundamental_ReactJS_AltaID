import React from 'react';
import Styles from './styles.module.css';

const Card = ({ title, isCompleted }) => {
  return (
    <div>
      <div className={Styles.card_box}>
        <span className={isCompleted ? Styles.card_title : Styles.card_title_false}>{title}</span>
      </div>
    </div>
  );
}

export default Card;