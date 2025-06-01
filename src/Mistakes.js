import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField'

function Mistakes() {
    const [words, setWord] = useState([]);
    return (
        <div>
            <h1>間違い</h1>
            <Button
                className='button-class'
                component={Link}
                to='/'
                variant='contained'>
                戻る
            </Button>
        </div>
    )
};

export default Mistakes;
