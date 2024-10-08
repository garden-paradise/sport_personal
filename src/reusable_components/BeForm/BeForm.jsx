import React, { useState } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import {
  Input,
  InputEmail,
  Textarea,
} from '../../utils/validators/Forms/ValidationForms';
import style from '../BeForm/BeForm.module.css';
import {
  email,
  emailNoReq,
  phone,
  required,
} from '../../utils/validators/validators';
// import axios from 'axios';
import emailjs from 'emailjs-com';

const afterSubmit = (result, dispatch) => dispatch(reset('beFormZ'));

const BeForm = ({ handleSubmit }) => {
  const [titleS, setTitleS] = useState('');

  // const handleSend = async ({ myName, myEmail, myNumber, myMessage }) => {
  //   let myTitle = 'Сообщение!';
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
    <section className={style.application_form_section}>
      <form className={style.application_form}>
        {titleS}
        <section>
          <div className={style.application_form_lbl}>Имя: *</div>
          <div className={style.application_form_input}>
            <Field
              name='myName'
              component={Input}
              validate={[required]}
              type='text'
            />
          </div>
        </section>
        <section>
          <div className={style.application_form_lbl}>Электронный адрес: </div>
          <div className={style.application_form_input}>
            <Field
              name='myEmail'
              component={InputEmail}
              validate={[emailNoReq]}
              type='email'
            />
          </div>
        </section>
        <div>
          <section>
            <div className={style.application_form_lbl}>Телефон: *</div>
            <div className={style.application_form_input}>
              <Field
                name='myNumber'
                component={Input}
                validate={[required, phone]}
                type='number'
              />
            </div>
          </section>
          <section>
            <div className={style.application_form_lbl}>Сообщение:</div>
            <div className={style.application_form_input}>
              <Field name='myMessage' component={Textarea} type='textarea' />
            </div>
          </section>
        </div>

        <button
          className={style.application_form_btn}
          type='submit'
          onClick={handleSubmit((data) => sendEmail(data))}
        >
          <b>Отправить</b>
        </button>
      </form>
    </section>
  );
};

export default reduxForm({
  form: 'beFormZ',
  onSubmitSuccess: afterSubmit,
})(BeForm);
