import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import './style/Popup.css';

export default function Popup({ active, close, title, text }) {
    return (
        <div className={"popap"}>
            <div className="block">
                <div className="title">{title}</div>
                <TextField 
                    style={{marginTop: '35px'}}
                    id="standard-basic" 
                    variant="standard"
                    label={text}
                />
                <div className="buttons">
                    <Button onClick={close} style={{width: '80px'}} variant="text">Отмена</Button>
                    <Button onClick={active} style={{width: '10px'}} variant="text">ОК</Button>
                </div>
            </div>
        </div>
    );
}
