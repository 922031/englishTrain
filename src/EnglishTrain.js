import React, { useState } from 'react';
import { Button, Box, Typography, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const words = [
    { en: "begin", jp: "始める" },
    { en: "waste", jp: "無駄" },
    { en: "renegade", jp: "反逆者" },
    { en: "habit", jp: "癖、習慣" },
    { en: "stand", jp: "立つ" },
    { en: "beneath", jp: "下に" },
    { en: "afraid", jp: "恐れている" },
    { en: "dark", jp: "暗い、闇" },
    { en: "edge", jp: "縁、角" },
    { en: "take", jp: "取る、使う、受ける" }
];

function EnglishTrain() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value.trim() === words[currentIndex].jp) {
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
                setInputValue('');
            }, 300);
        }
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setInputValue('');
    };

    return (
        <Box
            className="english"
            sx={{
                maxWidth: 500,
                margin: '80px auto',
                padding: 4,
                textAlign: 'center',
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: '#f9f9f9'
            }}
        >
            <Typography variant="h4" gutterBottom>
                英単語トレーニング
            </Typography>

            <Typography variant="h5" color="primary" sx={{ my: 4 }}>
                {words[currentIndex].en}
            </Typography>

            <TextField
                label="日本語訳を入力"
                variant="outlined"
                fullWidth
                value={inputValue}
                onChange={handleChange}
            />

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Button
                    component={Link}
                    to="/"
                    variant="contained"
                    color="secondary"
                >
                    戻る
                </Button>
                <Button
                    variant="contained"
                    onClick={handleNext}
                >
                    次の問題
                </Button>
            </Box>
        </Box>
    );
}

export default EnglishTrain;
