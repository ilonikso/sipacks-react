import React from 'react'
import SheetMore from './SheetMore'
import SheetQuestions from './SheetQuestions'

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

            <SheetQuestions />

            <a href="index.html" className="item__data item__download button sheet__download" rel="noopener" target="_blank" title="Скачать">Скачать</a>

            <SheetMore />
        </li>
    )
}

export default SheetItem
