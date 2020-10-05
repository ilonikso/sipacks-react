import React from 'react'

const TagItem = (props) => {
    
    return (
        <button className="tags__item">{props.name}</button>
    )
}

export default TagItem;