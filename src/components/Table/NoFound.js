import React from "react";

const NoFound = (props) => {
    return (
        <div className="no-found sheet__no-found">
            К сожалению, по вашему запросу{" "}
            <b className="no-found-text">{props.searchText}</b> ничего не найдено :(
        </div>
    );
};

export default NoFound;
