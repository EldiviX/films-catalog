import { useState } from 'react'
import './App.css'

const sort = [
    { option: 'Популярности ↓'},
    { option: 'Популярности ↑'}
]
const year = [
    { option: '2023'},
    { option: '2022'},
    { option: '2021'},
    { option: '2020'},
    { option: '2019'},
    { option: '2018'},
    { option: '2017'},
    { option: '2016'},
    { option: '2015'},
    { option: '2014'},
    { option: '2013'},
    { option: '2012'},
]

function Select({ title }) {
    let listItem;
    return (
        <div className="sorting">
            <div className="sorting_pla">{title}</div>
            <select name="filter" id="">
                {
                    (title === 'Сортировать по:') ? 
                    listItem = (sort.map(item => {
                        return <option value={item.option} key={item.option}>{item.option}</option>
                    })) : 
                    listItem = (year.map(item => {
                        return <option value={item.option} key={item.option}>{item.option}</option>
                    }))
                }
            </select>
        </div>
    )
}

function Genres() {
    
}

function App() {

    return (
        <>

            <header>
                <div className="header__logo">
                    <button
                        // onClick={}
                    >Фильмы</button>
                </div>
                <div className="header__exit">
                    <button
                        // onClick={}
                    >Выйти</button>
                </div>
            </header>

            <div className='filters'>
                <div className="filters__head">
                    <div className="filters__head_name">Фильтры</div>
                    <div className="filters__head_close">
                        <button
                            // onClick={}
                        >x</button>
                    </div>
                </div>
                <Select title="Сортировать по:" />
                <Select title="Год релиза"/>
                <div className="genres">
                    <div className="genres_name">Жанры</div>
                    <div className="genres_list">
                        <div className='list_checkbox'>
                            <input type="checkbox" name="Комедия" id="kom" />
                            <label htmlFor="kom">Комедия</label>
                        </div>
                        <div className='list_checkbox'>
                            <input type="checkbox" name="Боевик" id="boev" />
                            <label htmlFor="boev">Боевик</label>
                        </div>
                        <div className='list_checkbox'>
                            <input type="checkbox" name="Драма" id="dram" />
                            <label htmlFor="dram">Драма</label>
                        </div>
                    </div>
                </div>
                <div className="pagination">
                    ad
                </div>
            </div>

        </>
    )
}

export default App
