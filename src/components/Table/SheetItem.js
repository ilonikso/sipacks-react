import React from 'react'

const SheetItem = (props) => {

    // const {name, author, date, diff, size, link} = props;

    return (
        <li className="item item-filter sheet__row">
            <div className="item__data item__group sheet__group">
                <span className="item__name sheet__name" title="Название пакета">Название пакета</span>
                <span className="item__author sheet__author" title="Автор пакета">Автор</span>
            </div>

            <span className="item__data item__date sheet__date" title="Дата создания">16.05.2020</span>

            <span className="item__data item__diff sheet__diff sheet__diff--hard">
                <span title="Сложность" className="item__diff-badge sheet__badge">5</span>
            </span>

            <span className="item__data item__likes sheet__likes">
                <span title="Количество оценок" className="item__likes-badge sheet__badge">5</span>
            </span>

            <span className="item__data item__size sheet__size" title="Размер файла">26.4МБ</span>

            <a href="index.html" className="item__data item__like sheet__like button" rel="noopener" target="_blank" title="Оценить пакет">Оценить пакет</a>

            <div className="item__data item__questions sheet__questions" title="Показать список вопросов">
                <button type="button" className="dropdown-toggle dropdown-toggle-questions button item__questions-button">Темы</button>
                <div className="dropdown-menu">
                    <img data-img="" src="" alt="Изображение недоступно"></img>
                    <div className="outside-link">
                        <span>Автор пакета разместил список тем на стороннем ресурсе</span>
                        <a href="index.html" className="button" rel="noopener noreferrer" target="_blank">Перейти</a>
                    </div>
                </div>
            </div>

            <a href="index.html" className="item__data item__download button sheet__download" rel="noopener" target="_blank" title="Скачать">Скачать</a>

            <div className="item__data item__more sheet__more" title="Другое">
                <button type="button" className="dropdown-toggle dropdown-toggle-complaints sheet__more-button">Больше возможностей</button>
                <div className="dropdown-content sheet__more-drop">
                    <a href="index" className="sheet__more-link" data-package="Название пакета" data-author="Автор">Пожаловаться</a>
                </div>
            </div>
        </li>
    )
}

export default SheetItem
