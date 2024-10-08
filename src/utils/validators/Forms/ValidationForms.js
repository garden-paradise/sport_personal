import React from 'react';
import style from './ValidationForms.module.css';

export const Textarea = ({ input, meta, ...props }) => {
  return (
    <div>
      <textarea
        className={`${style.input_successful} ${style.textarea_successful}`}
        {...props}
        {...input}
      />
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <input
        className={`${style.input_successful} ${
          meta.touched &&
          (hasError ? style.input_successful_er : style.input_successful_suc)
        }`}
        {...props}
        {...input}
      />
      {/* {hasError && (
        <div className={meta.error && style.text_error}>{meta.error}</div>
      )} */}
    </div>
  );
};

export const InputEmail = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error && meta.dirty;
  return (
    <div>
      <input
        className={`${style.input_successful} ${
          meta.visited && meta.dirty
            ? hasError
              ? style.input_successful_er
              : style.input_successful_suc
            : ''
        }  `}
        {...props}
        {...input}
      />
    </div>
  );
};

export const InputCheckout = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <input
        className={`${style.input_successful_check} ${
          meta.touched &&
          (hasError
            ? style.input_successful_er_check
            : style.input_successful_suc_check)
        }`}
        {...props}
        {...input}
      />
    </div>
  );
};

export const InputEmailCheckout = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error && meta.dirty;
  return (
    <div>
      <input
        className={`${style.input_successful_check} ${
          meta.visited && meta.dirty
            ? hasError
              ? style.input_successful_er_check
              : style.input_successful_suc_check
            : ''
        }  `}
        {...props}
        {...input}
      />
    </div>
  );
};

export const InputChat = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div>
      <input
        className={`${style.input_successful_chat} ${
          meta.touched &&
          (hasError ? style.input_successful_er : style.input_successful_suc)
        }`}
        {...props}
        {...input}
      />
    </div>
  );
};

export const InputEmailChat = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error && meta.dirty;
  return (
    <div>
      <input
        className={`${style.input_successful_chat} ${
          meta.visited && meta.dirty
            ? hasError
              ? style.input_successful_er
              : style.input_successful_suc
            : ''
        }  `}
        {...props}
        {...input}
      />
    </div>
  );
};

export const TextareaChat = ({ input, meta, ...props }) => {
  return (
    <div>
      <textarea
        className={`${style.input_successful_chat} ${style.textarea_successful_chat}`}
        {...props}
        {...input}
      />
    </div>
  );
};
