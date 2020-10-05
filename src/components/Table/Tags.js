import React from "react";
import TagItem from "./TagItem";

const tagItemsValue = [
    "Музыка",
    "Игры",
    "Дота",
    "Кино",
    "Авто",
    "Школьные вопросы",
];

const Tags = () => {
    const items = tagItemsValue.map((item, index) => (
        <TagItem name={item} key={index} />
    ));

    return (
        <div className="table__tags tags">
            <div className="tags__wrapper">{items}</div>
        </div>
    );
};

export default Tags;
