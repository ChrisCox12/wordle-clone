import { KEYBOARD } from '../constants/keyboard';

import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

import styles from '../Styles.module.css';


export default function Keyboard({ handleGuessInput, prevGuess, isGameOver, resetKeyboard, setResetKeyboard }) {
    const CustomButton = (props) => {
        return (
            <Button
                sx={{ 
                    minWidth: { xs: 0, sm: '48px', md: '64px' }, 
                    fontWeight: 'bold',
                    border: '1px solid red',
                    backgroundColor: props.datacolor,
                    color: 'white'
                }}
                {...props}
            />
        );
    }
    const frow = [...KEYBOARD.slice(0, 10)];
    const srow = [...KEYBOARD.slice(10, 19)];
    const trow = [...KEYBOARD.slice(19)];
    const [firstRow, setFirstRow] = useState(frow); // top row of keyboard
    const [secondRow, setSecondRow] = useState(srow); // middle row of keyboard
    const [thirdRow, setThirdRow] = useState(trow); // bottom row of keyboard

    
    useEffect(() => {
        if(prevGuess.length !== 0) {
            let guessCopy = [...prevGuess];
            let firstRowCopy = [...firstRow];
            let secondRowCopy = [...secondRow];
            let thirdRowCopy = [...thirdRow];
            
            firstRowCopy.forEach(rowLetter => {
                guessCopy.forEach(guessLetter => {
                    if(rowLetter.key === guessLetter.key) {
                        if(rowLetter.color === '') {
                            rowLetter.color = guessLetter.color;
                        }
                        else if(guessLetter.color === 'darkgreen' && rowLetter.color !== 'darkgreen') {
                            rowLetter.color = guessLetter.color;
                        }
                    }
                });
            });

            secondRowCopy.forEach(rowLetter => {
                guessCopy.forEach(guessLetter => {
                    if(rowLetter.key === guessLetter.key) {
                        if(rowLetter.color === '') {
                            rowLetter.color = guessLetter.color;
                        }
                        else if(guessLetter.color === 'darkgreen' && rowLetter.color !== 'darkgreen') {
                            rowLetter.color = guessLetter.color;
                        }
                    }
                });
            });

            thirdRowCopy.forEach(rowLetter => {
                guessCopy.forEach(guessLetter => {
                    if(rowLetter.key === guessLetter.key) {
                        if(rowLetter.color === '') {
                            rowLetter.color = guessLetter.color;
                        }
                        else if(guessLetter.color === 'darkgreen' && rowLetter.color !== 'darkgreen') {
                            rowLetter.color = guessLetter.color;
                        }
                    }
                });
            });

            setFirstRow(firstRowCopy);
            setSecondRow(secondRowCopy);
            setThirdRow(thirdRowCopy);
        }
    }, [prevGuess]);

    useEffect(() => {
        if(resetKeyboard) {
            let firstRowCopy = [...firstRow];
            let secondRowCopy = [...secondRow];
            let thirdRowCopy = [...thirdRow];

            firstRowCopy.forEach(rowLetter => rowLetter.color = '');
            secondRowCopy.forEach(rowLetter => rowLetter.color = '');
            thirdRowCopy.forEach(rowLetter => rowLetter.color = '');

            setFirstRow(firstRowCopy);
            setSecondRow(secondRowCopy);
            setThirdRow(thirdRowCopy);
            setResetKeyboard(false);
        }
    }, [resetKeyboard, setResetKeyboard]);


    return (
        <div className={styles['keyboard']}>
            <div className='top-row'>
                {firstRow && (
                    firstRow.map(({ key, color }, index) => (
                        <CustomButton 
                            key={index} 
                            datacolor={color} 
                            onClick={() => handleGuessInput({ key: key })} 
                            disabled={isGameOver}
                        >{key}</CustomButton>
                    ))
                )}
                
            </div>
            
            <div className='middle-row'>
                {secondRow && (
                    secondRow.map(({ key, color }, index) => (
                        <CustomButton 
                            key={index} 
                            datacolor={color} 
                            onClick={() => handleGuessInput({ key: key })} 
                            disabled={isGameOver}
                        >{key}</CustomButton>
                    ))
                )}
            </div>

            <div className='bottom-row'>
                <CustomButton onClick={() => handleGuessInput({ key: 'Enter' })} disabled={isGameOver}>ENTER</CustomButton>
                
                {thirdRow && (
                    thirdRow.map(({ key, color }, index) => (
                        <CustomButton 
                            key={index} 
                            datacolor={color} 
                            onClick={() => handleGuessInput({ key: key })} 
                            disabled={isGameOver}
                        >{key}</CustomButton>
                    ))
                )}

                <CustomButton onClick={() => handleGuessInput({ key: 'Backspace' })} disabled={isGameOver}>BACK</CustomButton>
            </div>
        </div>
    );
}