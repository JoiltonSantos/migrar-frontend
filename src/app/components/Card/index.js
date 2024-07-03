import React from 'react';
import styles from './card.module.css'

export default async function Card() {
  const cards = await fetch('http://localhost:5068/api/Destino').then(res => res.json());
  console.log(cards);

  return (
    <>
      {cards?.map((card) => (
        <div className={styles.card_container} key={card.id}>
          <img className={styles.card_image} src={card.foto} alt={card.local} />
          <div className={styles.card_body}>
            <h2 className={styles.card_title}>{card.local}</h2>
            <p className={styles.card_text}>{card.valor}</p>
            <button className={styles.card_button}>COMPRAR</button>
          </div>
        </div>
      ))}
    </>
  );
}