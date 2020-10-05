import React from 'react'

const SheetHeader = () => {
    return (
        <div className="sheet__header">
            <span className="item__header item__name">Название: 
                <button className="item__sort item__sort--up" data-sort="name-up" title="Сортировать по возрастанию">Sort up</button>
                <button className="item__sort item__sort--down" data-sort="name-down" title="Сортировать по убыванию">Sort down</button>
            </span>
            <span className="item__header item__date">Дата:
                <button className="item__sort item__sort--up" data-sort="date-up" title="Сортировать по возрастанию">Sort up</button>
                <button className="item__sort item__sort--down" data-sort="date-down" title="Сортировать по убыванию">Sort down</button>
            </span>
            <span className="item__header item__diff">Сложность:
                <button className="item__sort item__sort--up" data-sort="difficulty-up" title="Сортировать по возрастанию">Sort up</button>
                <button className="item__sort item__sort--down" data-sort="difficulty-down" title="Сортировать по убыванию">Sort down</button>
            </span>
                
            <span className="item__header item__likes" title="Количество оценок">Рейтинг:
                <button className="item__sort item__sort--up" data-sort="likes-up" title="Сортировать по возрастанию">Sort up</button>
                <button className="item__sort item__sort--down" data-sort="likes-down" title="Сортировать по убыванию">Sort down</button>
            </span>

            <span className="item__header item__size" title="Размер файла">Размер:
                <button className="item__sort item__sort--up" data-sort="size-up" title="Сортировать по возрастанию">Sort up</button>
                <button className="item__sort item__sort--down" data-sort="size-down" title="Сортировать по убыванию">Sort down</button>
            </span>

            <span  className="item__header item__like"></span>
            <span className="item__header item__questions"></span>
            <span  className="item__header item__download"></span>
            <span  className="item__header item__more"></span>
        </div>
    )
}

export default SheetHeader
