import React, { useState } from 'react';
import logo from './../assets/img/vector/logo.svg'
import ContactModal from './ContactModal';
import Modal from 'react-modal'

const Header = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    Modal.setAppElement('#root');

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const showModal = () => {
        setModalIsOpen(true)
    }

    return (
        <nav className="nav">
            <div className="nav__wrapper wrapper blur-shadow-bottom">
                <a href="index.html" className="nav__logo" data-aos="fade-down" data-aos-delay="400">
                    <img src={ logo } alt="logo"></img>
                </a>

                <ul className="main-menu nav__menu">
                    <li className="menu-item nav__item"><a href="index.html">Игровые Пакеты</a></li>
                    <li className="menu-item nav__item"><a href="index.html">Поддержать</a></li>
                    <li className="menu-item nav__item"><a onClick={ showModal }>Написать нам</a></li>
                </ul>
                <button className="nav__burger">Menu</button>
            </div>
            

            <Modal isOpen={modalIsOpen}
                   onRequestClose={closeModal}
                   overlayClassName="overlay"
                   className="modal__container"
            >
                <ContactModal closeModal={closeModal}/>
            </Modal>
        </nav>
    )
}

export default Header;