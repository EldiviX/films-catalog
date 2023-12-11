import React from 'react';
import './App.css';
import Select from './select.jsx';
import Genres from './Genres.jsx';
import Slider from './Slider.jsx';
import Card from './Card.jsx';
import { ArrFilmsProvider, useArrFilms } from './Context.jsx';

const sort = [
  { option: 'Популярности ↓' },
  { option: 'Популярности ↑' }
];
const year = [
  { option: '2023' },
  { option: '2022' },
  { option: '2021' },
  { option: '2020' },
  { option: '2019' },
  { option: '2018' },
  { option: '2017' },
  { option: '2016' },
  { option: '2015' },
  { option: '2014' },
  { option: '2013' },
  { option: '2012' },
];

function App() {
    return (
        <ArrFilmsProvider>
            <AppContent />
        </ArrFilmsProvider>
    );
}

function AppContent() {
    const { arrFilms } = useArrFilms();

    return (
        <>
        <header>
            <div className="header__logo">
                <button>{/* onClick={} */}Фильмы</button>
            </div>
            <div className="header__exit">
                <button>{/* onClick={} */}Выйти</button>
            </div>
        </header>

        <div className="main">
            <div className="main_filters">
            <div className='filters'>
                <div className="filters__head">
                    <div className="filters__head_name">Фильтры</div>
                    <div className="filters__head_close">
                        <button>{/* onClick={} */}</button>
                    </div>
                </div>
                <Select title="Сортировать по:" sort={sort} year={year} />
                <div className="year-release">Год релиза:</div>
                <Slider />
                <Genres />
                <div className="pagination">
                    
                </div>
            </div>
            </div>
            <div className="film_card" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                {arrFilms.map((film) => <Card key={film.id} film={film} />)}
            </div>
        </div>
        </>
    );
}

export default App;
