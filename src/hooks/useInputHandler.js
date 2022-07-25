import { useEffect, useState } from 'react';

export default function useInputHandler(wordToGuess) {
    const [guesses, setGuesses] = useState([
        [{key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}],
        [{key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}],
        [{key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}],
        [{key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}],
        [{key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}],
        [{key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}, {key: '', color: ''}]
    ]);
    const [currentGuessRow, setCurrentGuessRow] = useState(0);
    const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [isGameOver, setIsGameOver] = useState(false);


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
                else {
                    // map over the guess and evaluate it
                    rowCopy.map((pair, index) => {
                        if(pair.key === wordToGuessCopy[index] && pair.color === '') {
                            pair.color = 'darkgreen';
                        }
                        else if(wordToGuessCopy.includes(pair.key)) {
                            pair.color = 'goldenrod';
                        }
                        else {
                            pair.color = 'grey';
                        }

                        return pair;
                    });
                }

                



                
                copy[currentGuessRow] = rowCopy;
                setCurrentGuessRow(prev => prev + 1);
                setCurrentGuessIndex(0);
                setCurrentGuess('');
                //console.log(copy)
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


    return { guesses, currentGuessIndex, handleGuessInput, currentGuess, isGameOver };
}