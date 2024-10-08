import React, { useState } from 'react';
import style from '../ChatDots/ChatDots.module.css';
import chatDots from '../../images/main//chatDots/message.png';
import tic_toc from '../../images/main/chatDots/tik-tok.png';
import insta from '../../images/main/chatDots/inst.png';
import phones from '../../images/main/chatDots/phone.png';
import telephone from '../../images/main/chatDots/email.png';
import { Field, reduxForm, reset } from 'redux-form';
import {
  InputChat,
  InputEmailChat,
  TextareaChat,
} from '../../utils/validators/Forms/ValidationForms';
import Radium, { StyleRoot } from 'radium';
import { fadeIn } from 'react-animations';
// import axios from 'axios';
import {
  email,
  emailNoReq,
  phone,
  required,
} from '../../utils/validators/validators';
import emailjs from 'emailjs-com';

const styles = {
  fadeIn: {
    animation: 'x 1.2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
};

const afterSubmit = (result, dispatch) => dispatch(reset('beForm'));

const ChatDots = ({ handleSubmit }) => {
  const [form, setForm] = useState(false);
  const [dots, setDots] = useState(false);
  const [titleS, setTitleS] = useState('');

  // const handleSend = async ({ myName, myEmail, myNumber, myMessage }) => {
  //   let myTitle = 'Хочу задать вопрос';
  //   try {
  //     await axios.post('https://h5russia.ew.r.appspot.com/mails/send_mail', {
  //       myTitle,
  //       myName,
  //       myEmail,
  //       myNumber,
  //       myMessage,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const sendEmail = (data) => {
    let title = 'Подписаться !';
    emailjs
      .send(
        'service_520ve59',
        'template_m1tr6r8',
        {
          myTitle: title,
          myName: data.myName,
          myEmail: data.myEmail,
          myNumber: data.myNumber,
          myMessage: data.myMessage,
        },
        'user_ANhasO1KzNfLTBcAhsECy'
      )
      .then(
        (result) => {
          setTitleS('Отправленно !');
        },
        (error) => {
          setTitleS('Ошибка !');
        }
      );
  };

  return (
    <StyleRoot class={style.chatDots}>
      <div class={form ? style.fab_form : style.fab_form_none}>
        <form style={styles.fadeIn} className={style.application_form}>
          <p className={style.application_form_p}>{titleS}</p>

          <section>
            <label className={style.application_form_label}>Имя: *</label>
            <div className={style.application_form_input}>
              <Field
                name='myName'
                component={InputChat}
                validate={[required]}
                type='text'
              />
            </div>
          </section>
          <section>
            <label className={style.application_form_label}>
              Электронный адрес:
            </label>
            <div className={style.application_form_input}>
              <Field
                name='myEmail'
                component={InputEmailChat}
                validate={[emailNoReq]}
                type='email'
              />
            </div>
          </section>
          <section>
            <label className={style.application_form_label}>Телефон: *</label>
            <div className={style.application_form_input}>
              <Field
                name='myNumber'
                component={InputChat}
                validate={[required, phone]}
                type='number'
              />
            </div>
          </section>
          <section>
            <label className={style.application_form_label}>Сообщение:</label>
            <div
              className={`${style.application_form_input} ${style.application_form_input_textarea}`}
            >
              <Field
                name='myMessage'
                component={TextareaChat}
                type='textarea'
              />
            </div>
          </section>
          <button
            className={style.application_form_btn}
            type='submit'
            onClick={handleSubmit((data) => sendEmail(data))}
          >
            <b>Отправить</b>
          </button>
        </form>
      </div>
      <div class={style.fab}>
        <span class={style.fab_action_button}>
          <img
            onClick={() => {
              setDots(!dots);
              setForm(false);
            }}
            class={style.chatDots_img}
            src={chatDots}
            alt='chatDotsImg'
          ></img>
        </span>
        <ul
          style={styles.fadeIn}
          class={dots ? style.fab_buttons : style.fab_buttons_none}
        >
          <li class={style.fab_buttons__item}>
            <a
              href={'https://www.tiktok.com/@sport_personal_msk?'}
              class={style.fab_buttons__link}
              target='_blank'
              rel='noreferrer'
            >
              <img src={tic_toc} class={style.icon_material} alt='images'></img>
            </a>
          </li>
          <li class={style.fab_buttons__item}>
            <a
              href={'https://www.instagram.com/sport_personal_moscow/'}
              class={style.fab_buttons__link}
              target='_blank'
              rel='noreferrer'
            >
              <img src={insta} class={style.icon_material} alt='images'></img>
            </a>
          </li>
          <li class={style.fab_buttons__item}>
            <a className={style.contacts_num} href='tel: +79637679889'>
              <img src={phones} class={style.icon_material} alt='images'></img>
            </a>
          </li>
          <li onClick={() => setForm(!form)} class={style.fab_buttons__item}>
            <a class={style.fab_buttons__link}>
              <img
                src={telephone}
                class={style.icon_material}
                alt='images'
              ></img>
            </a>
          </li>
        </ul>
      </div>
    </StyleRoot>
  );
};

export default reduxForm({
  form: 'beForm',
  onSubmitSuccess: afterSubmit,
})(ChatDots);
