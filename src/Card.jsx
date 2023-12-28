import * as React from 'react';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

export default function Card({film}) {
    const url = `https://image.tmdb.org/t/p/w500${film.backdrop_path}`;
    const styleLink = { textDecoration: 'none', color: 'black'};
    return (
        <div style={{ textDecoration: 'none', color: 'black', maxHeight: '280px', maxWidth: '320px', marginRight: '10px', marginBottom: '10px' }}>
            <div className="card">
                <Link to={`/details/${film.id}`} style={styleLink}>
                    <img className='card_pic' src={url} alt="" />
                </Link>
                <div className="card-description">
                    <Link to={`/details/${film.id}`} style={styleLink}>
                        <div className="card_main">
                            <div className="card_main-name">{film.title}</div>
                            <div className="card_main-rating">Рейтинг {film.vote_average.toFixed(1)}</div>
                        </div>
                    </Link>
                    <IconButton
                        onClick={(event) => event.stopPropagation()}
                        className='card_main-like'
                        size='small'
                        style={{position:"absolute", right:"15px", bottom:"5px", width:"40px", height:"40px", marginTop:"-8px", marginRight:"-10px"}}
                    >
                        <GradeOutlinedIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}