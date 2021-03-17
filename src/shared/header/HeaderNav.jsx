import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <nav className="header-nav">
      <NavLink to="/" className="header-nav__link">
        Купоны и сертификаты
      </NavLink>
      <NavLink to="/" className="header-nav__link" exact>
        Впечатления
      </NavLink>
      <NavLink to="/" className="header-nav__link">
        Авиабилеты
      </NavLink>
      <NavLink to="/" className="header-nav__link">
        Ж/д билеты
      </NavLink>
      <NavLink to="/" className="header-nav__link">
        Отели
      </NavLink>
      <NavLink to="/" className="header-nav__link">
        Каршеринг
      </NavLink>
      <NavLink to="/" className="header-nav__link">
        Театры
      </NavLink>
      <NavLink to="/" className="header-nav__link">
        Страхование
      </NavLink>
      <NavLink to="/" className="header-nav__link">
        Как подключиться
      </NavLink>
      <NavLink to="/" className="header-nav__link">
        Партнеры
      </NavLink>
    </nav>
  )
}

export default HeaderNav
