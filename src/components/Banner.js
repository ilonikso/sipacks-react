import React from 'react';

const Banner = () => {
    return(
        <section className="promo1 promo1--index-page">
                <div className="wrapper ">
                    <div className="promo1__wrapper">
                        <div className="promo1__block br-text-block">
                            <h1 className="promo1__header br-header">Игровые пакеты <br></br>для SIGame</h1>
                            <p className="promo1__text br-text">Сервис для поиска, добавления и продвижения пакетов для игры SIGame</p>
                            <p className="promo1__text br-text">Этот сервис объединяет лучшие паки для своей игры в одном месте, упрощает поиск, и позволяет найти самый подходящий пакет вопросов для вашей компании! <br></br>Добавляйте свои пакеты и делитесь ими с друзьями!</p>
                            <a href="#packs" className="promo1__link button">Искать пакеты</a>
                            <a href="https://forms.gle/aLCWQJ5KjapDGrBU9" className="promo1__link button button--white" target="_blank" rel="noopener noreferrer">Добавить пакет</a>
                        </div>
                    </div>
                </div>
                <div className="promo1__decoration">
                    <div className="promo1__clip">
                        <svg width="1060" height="733" viewBox="0 0 1060 733"  xmlns="http://www.w3.org/2000/svg" >
                            <defs>
                                <clipPath id="clip-2">
                                    <path id="mask-1" d="M998.955 -567.431C1080.08 -486.726 1110.46 -380.328 1178.69 -307.094C1246.65 -233.776 1352.11 -193.781 1405.41 -119.592C1458.36 -45.5627 1459.23 62.9046 1406.98 142.237C1354.54 221.897 1249.04 272.666 1151.77 360.578C1054.23 448.574 964.977 573.958 881.097 569.839C797.56 565.881 719.736 432.581 613.684 357.331C507.555 281.836 373.542 264.553 280.076 193.92C186.344 123.371 133.502 -0.36671 141.822 -125.162C150.065 -250.202 219.735 -376.383 315.572 -481.831C411.677 -587.362 533.683 -672.076 660.335 -687.373C786.797 -702.341 918.172 -647.976 998.955 -567.431Z"/>
                                </clipPath>
                            </defs>
                         </svg>      
                    </div>
                    <div className="promo1__decoration-box"></div>    
                </div>
            </section>
    );
}

export default Banner;