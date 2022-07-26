import { KEYBOARD } from '../constants/keyboard';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import styles from '../Styles.module.css';


export default function Keyboard({ setGuess, handleGuessInput }) {

    const CustomButton = (props) => {
        return (
            <Button
                sx={{ 
                    minWidth: { xs: 0, sm: '48px', md: '64px' }, 
                    fontWeight: 'bold',
                    border: '1px solid red'
                }}
                {...props}
            />
        );
    }
    

    return (
        <div className={styles['keyboard']}>
            <div className='top-row'>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(0) })}>{KEYBOARD.at(0)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(1) })}>{KEYBOARD.at(1)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(2) })}>{KEYBOARD.at(2)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(3) })}>{KEYBOARD.at(3)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(4) })}>{KEYBOARD.at(4)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(5) })}>{KEYBOARD.at(5)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(6) })}>{KEYBOARD.at(6)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(7) })}>{KEYBOARD.at(7)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(8) })}>{KEYBOARD.at(8)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(9) })}>{KEYBOARD.at(9)}</CustomButton>
            </div>

            <div className='middle-row'>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(10) })}>{KEYBOARD.at(10)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(11) })}>{KEYBOARD.at(11)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(12) })}>{KEYBOARD.at(12)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(13) })}>{KEYBOARD.at(13)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(14) })}>{KEYBOARD.at(14)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(15) })}>{KEYBOARD.at(15)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(16) })}>{KEYBOARD.at(16)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(17) })}>{KEYBOARD.at(17)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(18) })}>{KEYBOARD.at(18)}</CustomButton>
            </div>

            <div className='bottom-row'>
                <CustomButton onClick={() => handleGuessInput({ key: 'Enter' })}>ENTER</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(19) })}>{KEYBOARD.at(19)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(20) })}>{KEYBOARD.at(20)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(21) })}>{KEYBOARD.at(21)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(22) })}>{KEYBOARD.at(22)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(23) })}>{KEYBOARD.at(23)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(24) })}>{KEYBOARD.at(24)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: KEYBOARD.at(25) })}>{KEYBOARD.at(25)}</CustomButton>
                <CustomButton onClick={() => handleGuessInput({ key: 'Backspace' })}>BACKSPACE</CustomButton>
            </div>
        </div>
    )
}