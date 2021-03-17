import React from "react";
import {Link} from 'react-router-dom'

export const FooterNav = () => {
    return (
        <nav className="footer-right__footer-nav">
        <Link to="/" className="footer-nav__link">
          Купоны и сертификаты
        </Link>
        <Link to="/" className="footer-nav__link">
          Впечатления
        </Link>
        <Link to="/" className="footer-nav__link">
          Авиабилеты
        </Link>
        <Link to="/" className="footer-nav__link">
          Ж/д билеты
        </Link>
        <Link to="/" className="footer-nav__link">
          Отели
        </Link>
        <Link to="/" className="footer-nav__link">
          Каршеринг
        </Link>
        <Link to="/" className="footer-nav__link">
          Театры
        </Link>
        <Link to="/" className="footer-nav__link">
          Страхование
        </Link>
        <Link to="/" className="footer-nav__link">
          Как подключиться
        </Link>
        <Link to="/" className="footer-nav__link">
          Партнеры
        </Link>
      </nav>
    )
}

export default FooterNav;