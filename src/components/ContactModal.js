import React from 'react'
import logo from '../assets/img/vector/logo.svg'
import ContactsForm from './ContactsForm'

const ContactModal = (props) => {
    return (
        <div className="modal">
            <button className="modal__cross" onClick={props.closeModal}></button>
            <div className="contact-form">
                <div className="contact-form__wrapper">
                    <img src={logo} alt="logo" className="contact-form__logo"></img>
                </div>
                
                <ContactsForm closeModal={props.closeModal}/>
            </div>
        </div> 
    )
}

export default ContactModal
