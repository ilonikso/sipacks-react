import React from "react";

export default class ContactsForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/moqparep"
        method="POST"
        className="contact-form__form"
      >
        <label className="contact-form__label">
            <span>Имя:</span>
            <input type="text" name="_replyto" className="contact-form__input"></input>
        </label>
        <label className="contact-form__label">
            <span>Адрес электронной почты:</span>
            <input type="text" name="_replyto" className="contact-form__input"></input>
        </label>
        <label className="contact-form__label">
            <span>Сообщение:</span>
            <textarea name="message" className="contact-form__textarea"></textarea>
        </label>
        {/* <button type="submit" className="contact-form__submit button">Отправить</button> */}

        {status === "SUCCESS" ? <p>Спасибо за ваш отзыв!</p> : <button type="submit" className="contact-form__submit button">Отправить</button> }
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
        // Close modal
        setTimeout(() => (this.props.closeModal()), 1500)
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}