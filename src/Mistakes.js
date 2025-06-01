import React, { useState } from "react";
import { Button, Typography, Card, CardContent, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const wordList = [
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

function Mistakes() {
    const [words, setWords] = useState(wordList);

    return (
        <Box
            className="english"
            sx={{
                maxWidth: 600,
                margin: '0 auto',
                padding: 4,
                textAlign: 'center'
            }}
        >
            <Typography variant="h4" gutterBottom>
                単語リスト
            </Typography>

            {words.map((word, index) => (
                <Card
                    key={index}
                    variant="outlined"
                    sx={{ marginBottom: 2, backgroundColor: '#f5f5f5' }}
                >
                    <CardContent>
                        <Typography variant="h6" color="primary">
                            {word.en}
                        </Typography>
                        <Typography variant="body1">
                            {word.jp}
                        </Typography>
                    </CardContent>
                </Card>
            ))}

            <Button
                component={Link}
                to='/'
                variant='contained'
                color='secondary'
                sx={{ marginTop: 3 }}
            >
                戻る
            </Button>
        </Box>
    );
}

export default Mistakes;
