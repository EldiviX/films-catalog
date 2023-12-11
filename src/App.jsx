import React from 'react';
import './App.css';
import Select from './SelectComponent.jsx';
import Genres from './Genres.jsx';
import Slider from './Slider.jsx';
import Card from './Card.jsx';
import { ArrFilmsProvider, useArrFilms } from './Context.jsx';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';

function App() {
    return (
        <ArrFilmsProvider>
            <AppContent />
        </ArrFilmsProvider>
    );
}

function AppContent() {
    const { arrFilms } = useArrFilms();
    const [page, setPage] = useState(1);

    function handleChangePagination(e, value) {
        console.log(value);
        setPage(value);
    }

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
                <Select title="Сортировать по:" page={page}/>
                <div className="year-release">Год релиза:</div>
                <Slider />
                <Genres />
                <Pagination onChange={handleChangePagination} siblingCount={0} className="pagination" count={500} color="primary" />
            </div>
            </div>
            <div className="film_card" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                {arrFilms.map((film) => <Card key={film.id} film={film}/>)}
            </div>
        </div>
        </>
    );
}

export default App;
