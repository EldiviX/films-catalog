import * as React from 'react';
import GradeIcon from '@mui/icons-material/Grade';
import IconButton from '@mui/material/IconButton';

export default function Card() {

    return (
        <div className="card">
            <img className='card_pic' src="./pic/1.png" alt="" />
            <div className="card-description">
                <div className="card_main">
                    <div className="card_main-name">Матрица</div>
                    <div className="card_main-rating">Рейтинг 9</div>
                </div>
                <IconButton
                    size='small'
                    style={{width:"40px", height:"40px"}}
                >
                    <GradeIcon />
                </IconButton>
            </div>
        </div>
    )
}