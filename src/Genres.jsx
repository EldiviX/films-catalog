import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Genres() {
    const [genres, setGenres] = useState([]);
    const token = Cookies.get('token');
    
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${token}`
            }
        };

        const fetchData = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=ru', options);
                const data = await response.json();
                setGenres(data.genres);
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []); 
    
    return (
        <Autocomplete
            
            multiple
            id="checkboxes-genres"
            options={genres || []}
            disableCloseOnSelect
            limitTags={1}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.name}
                </li>
            )}
            style={{ marginTop: "5px" }}
            renderInput={(params) => (
                <TextField {...params} variant="standard" label="Жанры" />
            )}
        />
    )
}
