import React from "react";

const NoFound = (props) => {
    return (
        <div class="no-found sheet__no-found">
            К сожалению, по вашему запросу{" "}
            <b class="no-found-text">{props.searchText}</b> ничего не найдено :(
        </div>
    );
};

export default NoFound;
