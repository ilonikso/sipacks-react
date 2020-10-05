import React from 'react';
import logo from './../assets/img/vector/logo.svg'

const Header = () => {
    return (
        <nav className="nav">
            <div className="nav__wrapper wrapper blur-shadow-bottom">
                <a href="index.html" className="nav__logo" data-aos="fade-down" data-aos-delay="400">
                    <img src={ logo } alt="logo"></img>
                </a>

                <ul className="main-menu nav__menu">
                    <li className="menu-item nav__item"><a href="index.html">Игровые Пакеты</a></li>
                    <li className="menu-item nav__item"><a href="index.html">Поддержать</a></li>
                    <li className="menu-item nav__item"><a href="index.html">Написать нам</a></li>
                </ul>
                <button className="nav__burger">Menu</button>
            </div>
        </nav>
    )
}

export default Header;