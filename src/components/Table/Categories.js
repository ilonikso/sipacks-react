import React from 'react';
import CategoriesItem from './CategoriesItem';

const categoriesItems = [
    'Все',
    'Смешанные',
    'Общие вопросы',
    'Игры',
    'Музыка',
    'Кино',
    'Разное'
]

const Categories = () => {
    
    const items = categoriesItems.map((item, index) => (<CategoriesItem name={item} key={index}/>))
    
    return (
        <div className="categories">
            <div className="categories__wrapper">
                {items}
            </div>
        </div>
    )
}

export default Categories;