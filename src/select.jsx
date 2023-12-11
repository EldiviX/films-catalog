import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react';
import { useArrFilms } from './Context.jsx';

export default function Select({page}) {
    const { setFilms } = useArrFilms();
    const genres = ['Популярности', 'Рейтингу'];
    const [status, setStatus] = useState('Популярности');
    
    useEffect(() => {
        const sort = (status === 'Популярности')
        ? 'https://api.themoviedb.org/3/movie/popular'
        : 'https://api.themoviedb.org/3/movie/top_rated';

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDk2YjZiZTdjYjRlOGQwM2NhNzY4Y2EyNTE5YjFkOCIsInN1YiI6IjY1NWQwMjFmNTM4NjZlMDBhYmFlZGUyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.289Q4vjlDtb2mmicnM0zigo4NIEKQ502YnXSBb-oyr4'
            }
        };

        fetch(`${sort}?language=ru&page=${page}`, options)
            .then(response => response.json())
            .then(response => {
                setFilms([...response.results]);
                console.log(response);
            })
            .catch(err => console.error(err))
    }, [status, page]); 

    function handleChange(e, value) {
        setStatus(value);
        console.log(value);
    }

    // const cardList 
    
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