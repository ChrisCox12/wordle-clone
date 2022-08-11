import { useState } from 'react';

export default function useInputHandler(wordToGuess) {
    const INITIAL_GUESSES = [
        [{key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}],
        [{key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}],
        [{key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}],
        [{key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}],
        [{key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}],
        [{key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}]
    ];
    const [guesses, setGuesses] = useState(INITIAL_GUESSES);
    const [currentGuessRow, setCurrentGuessRow] = useState(0);
    const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [isGameOver, setIsGameOver] = useState(false);
    const [currentGuessNumber, setCurrentGuessNumber] = useState(0);
    const [prevGuess, setPrevGuess] = useState([]);

    const resetGame = () => {
        setGuesses(INITIAL_GUESSES);
        setCurrentGuessRow(0);
        setCurrentGuessIndex(0);
        setCurrentGuess('');
        setIsGameOver(false);
        setCurrentGuessNumber(0);
        setPrevGuess([]);
    }

    const handleGuessInput = (key) => {
        let copy = [...guesses]; // copy of all guesses
        const keyValue = key.key;
        const keyCode = key.keyCode;

        if(isGameOver) return; // if game is over, do nothing

        if(keyValue === 'Backspace') { 
            setCurrentGuess(prev => prev.slice(0, -1)); //  cuts last letter from currentGuess
            
            if(currentGuessIndex > 0) setCurrentGuessIndex(prev => prev - 1);
            
            copy[currentGuessRow][currentGuessIndex - 1] = { key: '', color: '' };
        }
        else if(keyValue === 'Enter') {
            if(currentGuess.length === 5) {
                let wordToGuessCopy = [...wordToGuess];  // copy the solution word
                let rowCopy = [...copy[currentGuessRow]];  // copy the row that contains the current guess

                if(currentGuess.toUpperCase() === wordToGuess.toUpperCase()) {
                    setIsGameOver(true);
                }
                
                // map over the guess and evaluate it
                rowCopy.map((pair, index) => {
                    if(pair.key === wordToGuessCopy[index] && pair.color === '') { // letter match
                        pair.color = 'darkgreen';
                    }
                    else if(wordToGuessCopy.includes(pair.key)) { // letter doesn't match but exists in solution
                        pair.color = 'goldenrod';
                    }
                    else { // letter is not in the solution
                        pair.color = 'gray';
                    }

                    return pair;
                });
                
                
                copy[currentGuessRow] = rowCopy; // add guess to copy of all guesses
                setCurrentGuessRow(prev => prev + 1);
                setCurrentGuessIndex(0);
                setCurrentGuess('');
                setPrevGuess(rowCopy);

                if(!isGameOver) {
                    // if last guess is entered, game over
                    if((currentGuessNumber + 1) === 6) {
                        setIsGameOver(true);
                    }

                    setCurrentGuessNumber(prev => prev + 1);
                }
            }
        }
        else if(keyCode) { // if input is coming from physical keyboard
            // handle input if a letter is pressed
            if(currentGuess.length < 5 && (keyCode >= 65 && keyCode <= 90)) {
                setCurrentGuess(prev => prev.concat(keyValue).toUpperCase()); // sanitize and update current guess string
                setCurrentGuessIndex(prev => prev + 1);
                copy[currentGuessRow][currentGuessIndex].key = (keyValue).toUpperCase(); // sanitize and update elements in 2D table (the board)
            }
        }
        else { // if input is comming from virtual (in-app) keyboard
            if(currentGuess.length < 5) {
                setCurrentGuess(prev => prev.concat(keyValue).toUpperCase()); // sanitize and update current guess string
                setCurrentGuessIndex(prev => prev + 1);
                copy[currentGuessRow][currentGuessIndex].key = keyValue.toUpperCase(); // sanitize and update elements in 2D table (the board)
            }
        }

        setGuesses(copy); // add guess to board
    }


    return { guesses, handleGuessInput, isGameOver, currentGuessNumber, prevGuess, resetGame };
}