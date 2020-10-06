import React, { useState } from 'react'
import cn from 'classnames'

const SheetQuestions = (props) => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    const showDropdown = () => (setDropdownIsOpen(true));

    const hideDropdown = () => (setDropdownIsOpen(false));

    const toggleDropdown = () => {
        dropdownIsOpen ? hideDropdown() : showDropdown();
    }

    return (
        <div className="item__data item__questions sheet__questions" title="Показать список вопросов">
            <button type="button" className={ cn('dropdown-toggle dropdown-toggle-questions button item__questions-button', {'active': dropdownIsOpen}) } onClick={ toggleDropdown }>Темы</button>
            <div className="dropdown-menu">
                <img data-img="" src="" alt="Изображение недоступно"></img>
                <div className="outside-link">
                    <span>Автор пакета разместил список тем на стороннем ресурсе</span>
                    <a href="index.html" className="button" rel="noopener noreferrer" target="_blank">Перейти</a>
                </div>
            </div>
        </div>
    )
}

export default SheetQuestions

