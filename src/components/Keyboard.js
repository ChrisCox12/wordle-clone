import { KEYBOARD } from '../constants/keyboard';
import { Button } from '@mui/material';
import { useEffect } from 'react';


export default function Keyboard({ setGuess, handleGuessInput }) {
    

    return (
        <div className='keyboard'>
            <div className='top-row'>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(0) })}>{KEYBOARD.at(0)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(1) })}>{KEYBOARD.at(1)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(2) })}>{KEYBOARD.at(2)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(3) })}>{KEYBOARD.at(3)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(4) })}>{KEYBOARD.at(4)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(5) })}>{KEYBOARD.at(5)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(6) })}>{KEYBOARD.at(6)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(7) })}>{KEYBOARD.at(7)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(8) })}>{KEYBOARD.at(8)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(9) })}>{KEYBOARD.at(9)}</Button>
            </div>

            <div className='middle-row' style={{ textAlign: 'center' }}>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(10) })}>{KEYBOARD.at(10)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(11) })}>{KEYBOARD.at(11)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(12) })}>{KEYBOARD.at(12)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(13) })}>{KEYBOARD.at(13)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(14) })}>{KEYBOARD.at(14)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(15) })}>{KEYBOARD.at(15)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(16) })}>{KEYBOARD.at(16)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(17) })}>{KEYBOARD.at(17)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(18) })}>{KEYBOARD.at(18)}</Button>
            </div>

            <div className='bottom-row' style={{ textAlign: 'center' }}>
                <Button onClick={() => handleGuessInput({ key: 'Enter' })}>ENTER</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(19) })}>{KEYBOARD.at(19)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(20) })}>{KEYBOARD.at(20)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(21) })}>{KEYBOARD.at(21)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(22) })}>{KEYBOARD.at(22)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(23) })}>{KEYBOARD.at(23)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(24) })}>{KEYBOARD.at(24)}</Button>
                <Button onClick={() => handleGuessInput({ key: KEYBOARD.at(25) })}>{KEYBOARD.at(25)}</Button>
                <Button onClick={() => handleGuessInput({ key: 'Backspace' })}>BACKSPACE</Button>
            </div>
        </div>
    )
}