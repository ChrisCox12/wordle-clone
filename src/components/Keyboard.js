import { KEYBOARD } from '../constants/keyboard';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from '../Styles.module.css';


export default function Keyboard({ handleGuessInput, prevGuess }) {
    const CustomButton = (props) => {
        return (
            <Button
                sx={{ 
                    minWidth: { xs: 0, sm: '48px', md: '64px' }, 
                    fontWeight: 'bold',
                    border: '1px solid red',
                    backgroundColor: props.datacolor
                }}
                {...props}
            />
        );
    }
    const frow = [...KEYBOARD.slice(0, 10)];
    const srow = [...KEYBOARD.slice(10, 19)];
    const trow = [...KEYBOARD.slice(19)];
    const [firstRow, setFirstRow] = useState(frow);
    const [secondRow, setSecondRow] = useState(srow);
    const [thirdRow, setThirdRow] = useState(trow);

    
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


    return (
        <div className={styles['keyboard']}>
            <div className='top-row'>
                {firstRow && (
                    firstRow.map(({key, color}, index) => (
                        <CustomButton key={index} datacolor={color} onClick={() => handleGuessInput({ key: key })}>{key}</CustomButton>
                    ))
                )}
                
            </div>
            
            <div className='middle-row'>
                {secondRow && (
                    secondRow.map(({key, color}, index) => (
                        <CustomButton key={index} datacolor={color} onClick={() => handleGuessInput({ key: key })}>{key}</CustomButton>
                    ))
                )}
            </div>

            <div className='bottom-row'>
                <CustomButton onClick={() => handleGuessInput({ key: 'Enter' })}>ENTER</CustomButton>
                
                {thirdRow && (
                    thirdRow.map(({key, color}, index) => (
                        <CustomButton key={index} datacolor={color} onClick={() => handleGuessInput({ key: key })}>{key}</CustomButton>
                    ))
                )}

                <CustomButton onClick={() => handleGuessInput({ key: 'Backspace' })}>BACKSPACE</CustomButton>
            </div>
        </div>
    )
}