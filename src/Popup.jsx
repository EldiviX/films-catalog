import React from 'react';
import { useState } from 'react';
import Cookies from 'js-cookie';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import './style/Popup.css';

export default function Popup({ active, close, title, text }) {
    const [value, setValue] = useState('');

    function handleChangeCookie() {
        Cookies.set('token', value, { expires: 7 });
        console.log(Cookies.get('token'));
    }

    return (
        <div className={"popap"}>
            <div className="block">
                <div className="title">{title}</div>
                <TextField 
                    style={{marginTop: '35px'}}
                    id="standard-basic" 
                    variant="standard"
                    label={text}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div className="buttons">
                    <Button onClick={close} style={{width: '80px'}} variant="text">Отмена</Button>
                    <Button onClick={() => { active(); (text === 'токен') && handleChangeCookie(); }} style={{width: '10px'}} variant="text">ОК</Button>
                </div>
            </div>
        </div>
    );
}
