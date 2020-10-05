import React from "react";
import NoFound from "./NoFound";
import SheetHeader from "./SheetHeader";
import SheetMain from "./SheetMain";
import ShowMoreButton from "./ShowMoreButton";
import Loader from "../Loader";

const Sheet = () => {
    return (
        <div className="sheet">
            <SheetHeader />
            <SheetMain />

            <Loader />
            <NoFound />
            <ShowMoreButton />
        </div>
    );
};

export default Sheet;
