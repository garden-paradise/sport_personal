import React from 'react';
import style from '../Abonement/Abonement.module.css';

const Abonement = ({ abonement, openFormPopUp, title, column }) => {
  return (
    <section className={style.abonement}>
      <div className={style.abonement_block1}>
        {abonement.name && (
          <h3 className={style.abonement_title_h}>{abonement.name}</h3>
        )}
        {/* {abonement.trial && (
          <div className={style.abonement_div_subtit}>
            <div className={style.abonement_subtit}>Пробная тренировка </div>
            <div className={style.abonement_subtit}>{abonement.trial} р.</div>
          </div>
        )}
        {abonement.oneTime && (
          <div className={style.abonement_div_subtit}>
            <div className={style.abonement_subtit}>Разовая тренировка</div>
            <div className={style.abonement_subtit}>{abonement.oneTime} р.</div>
          </div>
        )} */}
      </div>
      {/* <div className={style.abonement_block2}>
        <h3 className={style.abonement_title}>Абонементы</h3>
        <div
          className={`${style.abonement_div_subtit} ${
            column && style.abonement_div_subtit_c
          }`}
        >
          <div className={style.abonement_subtit}> 4 тренировки </div>
          <div
            className={`${style.abonement_subtit} ${style.abonement_subtit_b}`}
          >
            {abonement.four} р.
          </div>
        </div>
        <div
          className={`${style.abonement_div_subtit} ${
            column && style.abonement_div_subtit_c
          }`}
        >
          <div className={style.abonement_subtit}>8 тренировок</div>
          <div
            className={`${style.abonement_subtit} ${style.abonement_subtit_b}`}
          >
            {abonement.eight} р.
          </div>
        </div>
        <div
          className={`${style.abonement_div_subtit} ${
            column && style.abonement_div_subtit_c
          }`}
        >
          <div className={style.abonement_subtit}>12 тренировок</div>
          <div
            className={`${style.abonement_subtit} ${style.abonement_subtit_b}`}
          >
            {abonement.twelve} р.
          </div>
        </div>
        <div
          className={`${style.abonement_div_subtit} ${
            column && style.abonement_div_subtit_c
          }`}
        >
          <div className={style.abonement_subtit}>16 тренировок</div>
          <div
            className={`${style.abonement_subtit} ${style.abonement_subtit_b}`}
          >
            {abonement.sixteen} р.
          </div>
        </div>
        <div
          className={`${style.abonement_div_subtit} ${
            column && style.abonement_div_subtit_c
          }`}
        >
          <div className={style.abonement_subtit}>24 тренировки</div>
          <div
            className={`${style.abonement_subtit} ${style.abonement_subtit_b}`}
          >
            {abonement.twentyFour} р.
          </div>
        </div>
      </div> */}
      <button
        onClick={() =>
          openFormPopUp(
            `Оставить заявку о покупке абонемента на ${
              abonement.name ? abonement.name : title
            }`
          )
        }
        className={style.abonement_btn}
      >
        Оставить заявку
      </button>
    </section>
  );
};

export default Abonement;
