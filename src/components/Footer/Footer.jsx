import React from 'react';
import style from '../Footer/Footer.module.css';
import logo from '../../images/footer/logo.png';
import insta from '../../images/footer/Insta.svg';
import tic_toc from '../../images/footer/Tic-Tok.svg';
import argoSoft from '../../images/footer/argoSoft.svg';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <section className={style.footer_info}>
          <div className={style.footer_info_link}>
            <ul className={style.header_nav}>
              <div
                className={`${style.header_nav_ul} ${style.header_nav_ul_1}`}
              >
                <li className={style.header_nav_li}>
                  <a className={style.header_nav_link} href='#trainers'>
                    Тренеры
                  </a>
                </li>
                <li className={style.header_nav_li}>
                  <a className={style.header_nav_link} href='#gallery'>
                    Галерея
                  </a>
                </li>
              </div>
              <div className={`${style.header_nav_ul}`}>
                <li className={style.header_nav_li}>
                  <a className={style.header_nav_link} href='#services'>
                    Услуги
                  </a>
                </li>
                <li className={style.header_nav_li}>
                  <a className={style.header_nav_link} href='#our'>
                    О нас
                  </a>
                </li>
                {/* <li className={style.header_nav_li}>
                <a className={style.header_nav_link} href='#abonements'>
                  Абонементы
                </a>
              </li> */}
              </div>
            </ul>
          </div>
          <figure className={style.footer_info_logo}>
            <NavLink to='/'>
              <img className={style.footer_info_img} src={logo} alt='logoImg' />
            </NavLink>
          </figure>
          <div className={style.footer_info_info}>
            <h4 className={style.footer_contacts_add}>
              <b>ул. Большая Грузинская, д. 12</b>
            </h4>
            <div className={style.footer_contacts_time}>
              Ежедневно с 9:00 до 22:00
            </div>
            <a className={style.footer_contacts_num} href='tel: +79637679889'>
              +7 (963) 767-98-89
            </a>
            <div className={style.footer_link_div_a}>
              <a
                className={style.footer_link_a}
                href={'https://www.instagram.com/sport_personal_moscow/'}
                target='_blank'
                rel='noreferrer'
              >
                <img src={insta} alt='instaImg' />
              </a>
              <a
                className={style.footer_link_a}
                href='https://www.tiktok.com/@sport_personal_msk?'
                target='_blank'
                rel='noreferrer'
              >
                <img src={tic_toc} alt='argoLogoImg' />
              </a>
            </div>
          </div>
        </section>

        <section className={style.footer_info_div}>
          <div className={style.footer_policy}>
            <NavLink
              className={style.footer_personal_policy}
              to={'/personal_policy'}
            >
              Согласие на обработку персональных данныx
            </NavLink>
          </div>
          <div className={style.footer_argo}>
            <div className={style.footer_argo_title}>
              Сайт создан компанией{' '}
              <a
                href='https://argosoftworks.com/'
                target='_blank'
                rel='noreferrer'
                className={style.footer_argo_title_a}
              >
                <b>ArgoSoftWorks</b>
              </a>
            </div>
            <div>
              <a
                href='https://argosoftworks.com/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  className={style.footer_argo_img}
                  src={argoSoft}
                  alt='argoLogoImg'
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
