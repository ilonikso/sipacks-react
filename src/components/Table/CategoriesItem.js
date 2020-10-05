import React from 'react'

const CategoriesItem = (props) => {
    return (
        <button type="button" className="categories__button">{props.name}</button>
    );
}

export default CategoriesItem;