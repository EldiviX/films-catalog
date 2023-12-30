import React from 'react';
import './style/App.css';
import Select from './SelectComponent.jsx';
import Genres from './Genres.jsx';
import Slider from './Slider.jsx';
import Card from './Card.jsx';
import { ArrFilmsProvider, useArrFilms } from './Context.jsx';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMoviesSharpIcon from '@mui/icons-material/LocalMoviesSharp';
import LogoutIcon from '@mui/icons-material/Logout';
import { Routes, Route } from 'react-router-dom';
import Details from './Details.jsx';
import Popup from './Popup.jsx';
import Cookies from 'js-cookie';

function App() {
    return (
        <>
            <ArrFilmsProvider>
                <Routes>
                    <Route path='/' >
                        <Route index element={<AppContent />} />
                        <Route path='/details/:id' element={<Details />} />
                    </Route>
                </Routes>
            </ArrFilmsProvider>

        </>
    );
}

function AppContent() {
    const { arrFilms } = useArrFilms();
    const [page, setPage] = useState(1);
    
    const [firstPopupVisible, setFirstPopupVisible] = useState(false);
    const [secondPopupVisible, setSecondPopupVisible] = useState(false);
    
    function closePopups() {
        setFirstPopupVisible(false);
        setSecondPopupVisible(false);
    }
    
    function clickFirstPopup() {
        setFirstPopupVisible(false);
        setSecondPopupVisible(true);
    }
    
    function clickSecondPopup() {
        closePopups();
    }
    
    function handleChangePagination(e, value) {
        console.log(value);
        setPage(value);
    }
    
    function removeFromCookies() {
        Cookies.remove('token');
        location.reload();
    }

    return (
        <>
            <header>
                <div className="header__logo">
                    <button>{/* onClick={} */}
                        <LocalMoviesSharpIcon fontSize='medium' style={{marginBottom: '-5px', marginRight: '5px'}}/>
                        Фильмы
                    </button>
                </div>
                <div className="header__exit">
                    <button onClick={() => setFirstPopupVisible(true)}>
                        <AccountCircleIcon fontSize='large' style={{marginBottom: '-5px', marginRight: '-20px'}}/>
                    </button>
                    <button className='button_exit' onClick={removeFromCookies}>
                        <LogoutIcon fontSize='medium' style={{marginBottom: ''}}/>
                    </button>
                </div>
            </header>

            {console.log(Cookies.get('token'))}

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
                    <Pagination onChange={handleChangePagination} siblingCount={0} className="pagination" count={400} color="primary" />
                </div>
                </div>
                <div className="film_card" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                    {arrFilms.map((film) => <Card key={film.id} film={film}/>)}
                </div>
            </div>
            
            {firstPopupVisible && <Popup active={clickFirstPopup} close={closePopups} title={'Запросить токен'} text={'почта'}/>}
            {secondPopupVisible && <Popup active={clickSecondPopup} close={closePopups} title={'Введите токен'} text={'токен'}/>}
        </>
    );
}

  

export default App;
