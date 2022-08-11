import { WORDS } from './constants/words';
import { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';

import Board from './components/Board';
import Keyboard from './components/Keyboard';

import useInputHandler from './hooks/useInputHandler';

import styles from './Styles.module.css';


export default function App() {
    const MAX_GUESSES = 6;
    const [wordToGuess, setWordToGuess] = useState('');
    const [resetKeyboard, setResetKeyboard] = useState(false);
    const { handleGuessInput, guesses, isGameOver, currentGuessNumber, prevGuess, resetGame } = useInputHandler(wordToGuess); 


    useEffect(() => {
        // set word to guess
        if(wordToGuess.length !== 5) {
            let randomIndex = Math.floor(Math.random() * WORDS.length);

            setWordToGuess(WORDS.at(randomIndex).toUpperCase());
        }
    }, [wordToGuess]);

    useEffect(() => {
        // adds callback to keyup event
        window.addEventListener('keyup', handleGuessInput);

        // removes callback from keyup event
        return () => window.removeEventListener('keyup', handleGuessInput);
    }, [handleGuessInput]);


    const reset = () => {
        resetGame();
        setResetKeyboard(true);
        setWordToGuess('');
    }


    return (
        <div className={styles['App']}>
            <Typography 
                component='h1' 
                variant='h3' 
                textAlign='center' 
                color='white'
            >Wordle Clone</Typography>

            <Typography 
                fontSize='1.75rem' 
                textAlign='center' 
                color='white' 
                marginBottom='2rem'
            >{`${currentGuessNumber}/${MAX_GUESSES}`}</Typography>

            {isGameOver && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div className={styles['game-over-txt']}>Game Over</div>
                    <div className={styles['game-over-txt']}>{`Word to guess: ${wordToGuess}`}</div>

                    <Button 
                        onClick={reset} 
                        variant='outlined' 
                        sx={{ 
                            color: 'white', 
                            fontWeight: 'bold', 
                            fontSize: '1.25rem', 
                            marginBottom: '1rem' 
                        }}
                    >Reset</Button>
                </div>
            )}

            {/* {wordToGuess && <div>{wordToGuess}</div>} */}

            <Board guesses={guesses} />
            
            <Keyboard 
                handleGuessInput={handleGuessInput} 
                prevGuess={prevGuess} 
                isGameOver={isGameOver} 
                resetKeyboard={resetKeyboard} 
                setResetKeyboard={setResetKeyboard} 
            />
        </div>
    );
}

