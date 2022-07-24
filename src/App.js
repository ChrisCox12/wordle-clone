import axios from 'axios';
import logo from './logo.svg';
import { WORDS } from './constants/words';
import { useEffect, useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import Board from './components/Board';
import Keyboard from './components/Keyboard';


export default function App() {
    const MAX_GUESSES = 6;
    const [currentGameNumber, setCurrentGameNumber] = useState(1);
    const [guessesLeft, setGuessesLeft] = useState(MAX_GUESSES);
    const [currentGuess, setCurrentGuess] = useState('');
    const [wordToGuess, setWordToGuess] = useState('');
    const [guesses, setGuesses] = useState([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ]);
    const [currentGuessRow, setCurrentGuessRow] = useState(0);
    const [currentGuessIndex, setCurrentGuessIndex] = useState(0);


    useEffect(() => {
        if(wordToGuess.length === 0) {
            let randomIndex = Math.floor(Math.random() * WORDS.length);

            setWordToGuess(WORDS.at(randomIndex));
        }

        console.log(wordToGuess)
    }, [wordToGuess]);


    function handleGuessInput(inputValue) {
        
    }


    return (
        <div className="App" style={{ backgroundColor: 'darksalmon', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component='h1' variant='h3' textAlign='center'>Wordle clone</Typography>
            <Typography fontSize='1.75rem' textAlign='center'>{`${currentGameNumber} ${MAX_GUESSES - guessesLeft}/${MAX_GUESSES}`}</Typography>
            
            <Board guesses={guesses} />
            
            {/* <TextField value={currentGuess} sx={{ width: '20rem'}} /> */}
            
            <Keyboard setGuess={setCurrentGuess} />
        </div>
    );
}

