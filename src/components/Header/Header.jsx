import React, { useState, useRef } from 'react';
import style from '../Header/Header.module.css';
import logo from '../../images/header/logo.png';
import menuB from '../../images/header/menu_32px.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const rootEl = useRef(null);
  const [editMode, setEditMode] = useState(true);

  let openBurger = () => {
    let boolean = !editMode;
    setEditMode(boolean);
  };

  return (
    <header className={style.header}>
      <div className={style.header_wrapper}>
        <div className={style.header_logo_div}>
          <NavLink className={style.logo_divs_link} to={'/'}>
            <img
              width='66'
              src={logo}
              className={style.header_logo}
              alt='logoHi5Images'
            />
          </NavLink>
          <a className={style.footer_contacts_num} href='tel: +79637679889'>
            +7 (963) 767-98-89
          </a>
        </div>

        <nav
          className={editMode ? style.header_navs : style.header_navs_false}
          onClick={openBurger}
        >
          <ul className={style.header_nav}>
            <li className={style.header_nav_li}>
              <a className={style.header_nav_link} href='#our'>
                О нас
              </a>
            </li>
            <li className={style.header_nav_li}>
              <a className={style.header_nav_link} href='#services'>
                Услуги
              </a>
            </li>
            <li className={style.header_nav_li}>
              <a className={style.header_nav_link} href='#trainers'>
                Тренеры
              </a>
            </li>
            {/* <li className={style.header_nav_li}>
              <a className={style.header_nav_link} href='#abonements'>
                Абонементы
              </a>
            </li> */}
            <li className={style.header_nav_li}>
              <a className={style.header_nav_link} href='#gallery'>
                Галерея
              </a>
            </li>
          </ul>
        </nav>
        <img
          ref={rootEl}
          onClick={openBurger}
          height='40'
          src={menuB}
          className={style.header_burger}
          alt='logoHi5Images'
        />
      </div>
    </header>
  );
};

export default Header;
