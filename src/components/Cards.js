import React from 'react';

const Cards = () => {
    return (
        <section className="cards">
            <h2 className="visually-hidden">Cards section</h2>
            <div className="wrapper">
                <div className="cards__wrapper">
                    <div className="cards__item">
                        <h3 className="cards__header">Добавить пакет:</h3>
                        <p className="cards__text">Вы сделали пакет и хотите поделиться им с друзьями? Вы нашли пакет, которого нет у нас на сайте? Вы занимаетесь созданием самых крутых пакетов, но о вас никто не знает?</p>
                        <p className="cards__text">Добавляйте ваши игровые пакеты на сайт — не дайте вашему пакету затеряться в глубинах интернета!</p>
                        <a href="https://forms.gle/aLCWQJ5KjapDGrBU9" className="button cards__button button--dark" target="_blank" rel="noopener noreferrer">Добавить пакет</a>
                    </div>
                    <div className="cards__item">
                        <h3 className="cards__header">Поддержать проект:</h3>
                        <p className="cards__text">SIPacks - это проект, который развивается силами энтузиастов. <br></br> На сайте отсутствует какая-либо реклама, и любая ваша помощь будет направлена на развитие проекта.</p>
                        <p className="cards__text">Поддержи проект и стань активным участником нашего сообщества!</p>
                        <a href="donate.html" className="button cards__button" target="_blank" rel="noopener noreferrer">Поддержать</a>
                    </div>
                </div>
            </div>
            <div className="cards__decoration"></div>
            
        </section>
    );
}

export default Cards;