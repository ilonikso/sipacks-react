import React from 'react';
import logo from './../assets/img/vector/footer-logo.svg';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__wrapper">
                <a href="index.html" className="footer__logo">
                    <img src={logo} alt="logo"></img>
                </a>
            
                <div className="footer__links">
                    <span className="footer__copy">Sipacks | 2020 All rights reserved.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;