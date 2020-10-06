import React, { useState } from 'react'
import cn from 'classnames'

const SheetMore = (props) => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    const showDropdown = () => (setDropdownIsOpen(true));

    const hideDropdown = () => (setDropdownIsOpen(false));

    const toggleDropdown = () => {
        dropdownIsOpen ? hideDropdown() : showDropdown();
    }

    return (
        <div className="item__data item__more sheet__more" title="Другое">
            <button type="button" className= { cn('dropdown-toggle dropdown-toggle-complaints sheet__more-button', {'active': dropdownIsOpen}) } onClick={toggleDropdown}>Больше возможностей</button>
            <div className="dropdown-content sheet__more-drop">
                <a href="index" className="sheet__more-link" data-package="Название пакета" data-author="Автор">Пожаловаться</a>
            </div>
        </div>
    )
}

export default SheetMore