import React, { useState } from 'react';
import style from '../Trainer/Trainer.module.css';
import CaretLeft from '../../images/main/trainers/CaretLeft.svg';
import CaretRight from '../../images/main/trainers/CaretRight.svg';
import inst from '../../images/main/trainers/Instagram_50px.png';

const Trainer = ({ trainers, openFormPopUp }) => {
  const [count, setCount] = useState(0);
  const [trainer, setTrainer] = useState(trainers[0]);
  let leftImage = () => {
    let i = count ? count - 1 : trainers.length - 1;
    setCount(i < 0 ? trainers.length : i);
    setTrainer(trainers[i]);
  };

  let rightImage = () => {
    let i = count === trainers.length - 1 ? 0 : count + 1;
    setCount(i > trainers.length ? 0 : i);
    setTrainer(trainers[i]);
  };
  return (
    <section className={style.trainer_container}>
      <img
        className={style.trainer_move}
        onClick={leftImage}
        src={CaretLeft}
        alt='CaretLeft'
      />
      <div className={style.trainer}>
        <div className={style.trener_block}>
          <img className={style.uni_img} src={trainer.image} alt='images' />
          <button
            onClick={() => openFormPopUp(trainer.button)}
            className={style.trener_btn}
          >
            {trainer.button}
          </button>
        </div>
        <div className={style.treners_info}>
          <a
            className={style.treners_info_a}
            target='_blank'
            rel='noreferrer'
            href={trainer.inst}
          >
            <div className={style.treners_info_div}>
              <p className={style.treners_info_tit}>{trainer.name}</p>
              <img className={style.treners_info_div_img} src={inst} alt='imageInst' />
            </div>
          </a>
          {trainer.info.map((item) => (
            <p className={style.treners_info_subtit}>{item}</p>
          ))}
        </div>
      </div>
      <img
        className={style.trainer_move}
        onClick={rightImage}
        src={CaretRight}
        alt='CaretRight'
      />
    </section>
  );
};

export default Trainer;
