import * as React from 'react';
import Cookies from 'js-cookie';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';
import { useArrFilms } from './Context.jsx';

export default function Select({page}) {
    const { setFilms } = useArrFilms();
    const genres = ['Популярности', 'Рейтингу'];
    const [status, setStatus] = useState('Популярности');
    const token = Cookies.get('token');
    
    useEffect(() => {

        let options
        
        const sort = (status === 'Популярности')
        ? 'https://api.themoviedb.org/3/movie/popular'
        : 'https://api.themoviedb.org/3/movie/top_rated';
        
        if (!token) {
            return;
        } else {
            options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            };
        }

        fetch(`${sort}?language=ru&page=${page}`, options)
            .then(response => response.json())
            .then(response => {
                setFilms([...response.results]);
                console.log(response);
            })
            .catch(err => console.error(err))
    }, [status, page, token]); 

    function handleChange(e, value) {
        setStatus(value);
        console.log(value);
    }
    
    return (
        <Autocomplete
            size='small'
            id="checkboxes-genres"
            options={genres}
            onChange={handleChange}
            disableCloseOnSelect
            getOptionLabel={(option) => option}
            style={{ marginTop: "5px" }}
            renderInput={(params) => (
                <TextField {...params} variant="standard" label="Сортировать по:" />
            )}
            defaultValue={genres[0]}
        />
    )
}