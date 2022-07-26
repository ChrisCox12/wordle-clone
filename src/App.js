import axios from 'axios';
import logo from './logo.svg';
import { WORDS } from './constants/words';
import { useEffect, useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import useInputHandler from './hooks/useInputHandler';


export default function App() {
    const MAX_GUESSES = 6;
    const [currentGameNumber, setCurrentGameNumber] = useState(1);
    const [guessesLeft, setGuessesLeft] = useState(MAX_GUESSES);
    //const [currentGuess, setCurrentGuess] = useState('');
    const [wordToGuess, setWordToGuess] = useState('');
    /* const [guesses, setGuesses] = useState([
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', ''],
        ['', '', '', '', '']
    ]);
    const [currentGuessRow, setCurrentGuessRow] = useState(0);
    const [currentGuessIndex, setCurrentGuessIndex] = useState(0); */
    //const [gameOver, setGameOver] = useState(false);
    const { handleGuessInput, guesses, isGameOver, currentGuessNumber, prevGuess } = useInputHandler(wordToGuess); 


    useEffect(() => {
        if(wordToGuess.length !== 5) {
            let randomIndex = Math.floor(Math.random() * WORDS.length);

            setWordToGuess(WORDS.at(randomIndex).toUpperCase());
        }
    }, [wordToGuess]);

    useEffect(() => {
        window.addEventListener('keyup', handleGuessInput)

        return () => window.removeEventListener('keyup', handleGuessInput)
    }, [handleGuessInput]);


    /* useEffect(() => {
        window.addEventListener('keyup', handleGuessInput)

        return () => window.removeEventListener('keyup', handleGuessInput)
    }, [])


    function handleGuessInput(inputValue) {
        let copy = [...guesses];

        if(inputValue === 'backspace') {
        
            setCurrentGuess(prev => prev.slice(0, -1)); //  cuts last letter from currentGuess
            if(currentGuessIndex > 0) setCurrentGuessIndex(prev => prev - 1);
            copy[currentGuessRow][currentGuessIndex - 1] = '';
        }
        else if(inputValue === 'submit') {
            


        }
        else {
            

            if(currentGuess.length < 5) {
                setCurrentGuess(prev => prev.concat(inputValue));
                setCurrentGuessIndex(prev => prev + 1);
                copy[currentGuessRow][currentGuessIndex] = inputValue;
            }
            
        }

        setGuesses(copy);
    } */


    return (
        <div className="App" style={{ backgroundColor: 'darksalmon', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography component='h1' variant='h3' textAlign='center'>Wordle clone</Typography>
            <Typography fontSize='1.75rem' textAlign='center'>{`${currentGameNumber} ${currentGuessNumber}/${MAX_GUESSES}`}</Typography>
            
            {wordToGuess && <div>{wordToGuess}</div>}

            <Board guesses={guesses} />

            {/* <div>{currentGuess}</div> */}
            
            <Keyboard handleGuessInput={handleGuessInput} prevGuess={prevGuess} />

            {/* <div>Current guess index: {currentGuessIndex}</div> */}

            {isGameOver && <div>Game is over</div>}
        </div>
    );
}

