import React from 'react';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


function EnglishTrain() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // try {
            //     const res = await fetch('https://api.aoikujira.com/eitango2000/'); // 単語を指定
            //     const data = await res.json();
            //     setWords(data);
            // } catch (err) {
            //     console.error(err);
            // }
        };
        fetchData();
    }, []);


    return (
        <div>
            <h1>英単語トレーニングページ</h1>
            {/* <ul>
                {words.map((word, index) => (
                    <li key={index}>{word}</li>
                ))}
            </ul> */}
            <Button
                className='button-class'
                component={Link}
                to='/'
                variant='contained'>
                戻る
            </Button>
        </div>
    );
}

export default EnglishTrain;
