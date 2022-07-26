import { useEffect, useState } from 'react';

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


    const handleGuessInput = ({ key }) => {
        let copy = [...guesses];

        if(key === 'Backspace') { 
            setCurrentGuess(prev => prev.slice(0, -1)); //  cuts last letter from currentGuess
            if(currentGuessIndex > 0) setCurrentGuessIndex(prev => prev - 1);
            copy[currentGuessRow][currentGuessIndex - 1] = {key: '', color: ''};
        }
        else if(key === 'Enter') {
            if(currentGuess.length === 5) {
                let wordToGuessCopy = [...wordToGuess];  // copy the solution word
                let guessCopy = [...currentGuess];
                let rowCopy = [...copy[currentGuessRow]];  // copy the row that contains the current guess

                if(currentGuess.toUpperCase() === wordToGuess.toUpperCase()) {
                    setIsGameOver(true);
                }
                
                // map over the guess and evaluate it
                rowCopy.map((pair, index) => {
                    if(pair.key === wordToGuessCopy[index] && pair.color === '') {
                        pair.color = 'darkgreen';
                    }
                    else if(wordToGuessCopy.includes(pair.key)) {
                        pair.color = 'goldenrod';
                    }
                    else {
                        pair.color = 'gray';
                    }

                    return pair;
                });
                
                
                copy[currentGuessRow] = rowCopy;
                setCurrentGuessRow(prev => prev + 1);
                setCurrentGuessIndex(0);
                setCurrentGuess('');
                if(!isGameOver) setCurrentGuessNumber(prev => prev + 1);
                //rowCopy.forEach(letter => checkHistory(letter))
                //console.log(copy)
                setPrevGuess(rowCopy);
            }
        }
        else {
            if(currentGuess.length < 5) {
                setCurrentGuess(prev => prev.concat(key).toUpperCase());
                setCurrentGuessIndex(prev => prev + 1);
                copy[currentGuessRow][currentGuessIndex].key = key.toUpperCase();
            }
            //console.log(key)
        }

        setGuesses(copy);
    }


    return { guesses, handleGuessInput, isGameOver, currentGuessNumber, prevGuess };
}