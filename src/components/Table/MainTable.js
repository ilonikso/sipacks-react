import React from 'react'
import Categories from './Categories'
import Search from './Search';
import Sheet from './Sheet';
import Tags from './Tags'

const MainTable = () => {
    return(
        <section className="table" id="packs"> 
            <div className="wrapper">
                <h2 className="table__header">Игровые пакеты:</h2>
                
                <Tags />
                <Search />
                <Categories />

                <Sheet />
            </div>
        </section>
    );
}


export default MainTable;