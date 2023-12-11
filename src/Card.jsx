import * as React from 'react';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import IconButton from '@mui/material/IconButton';

export default function Card({film}) {
    const url = `https://image.tmdb.org/t/p/w500${film.poster_path}`
    return (
        <div className="card">
            <img className='card_pic' src={url} alt="" />
            <div className="card-description">
                <div className="card_main">
                    <div className="card_main-name">{film.title}</div>
                    <div className="card_main-rating">Рейтинг {film.vote_average.toFixed(1)}</div>
                </div>
                <IconButton
                    className='card_main-like'
                    size='small'
                    style={{width:"40px", height:"40px", marginTop:"-8px", marginRight:"-10px"}}
                >
                    <GradeOutlinedIcon />
                </IconButton>
            </div>
        </div>
    )
}