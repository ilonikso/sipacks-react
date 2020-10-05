import React from 'react';

const Search = () => {
    return (
        <div className="table__search form">
            <form className="form__item" id="search-form">
                <label className="form__label" htmlFor="formInput">Поиск: <b className="founded-number">(10)</b></label>
                <input className="form__input" type="text" placeholder="Введите название..." id="formInput"></input>
                <small className="form__small">Введите название, автора или ключевые слова.</small>
            </form>
            <button type="button" className="button form__random categories--random">Рандомный пакет</button>
        </div>
    );
}

export default Search;