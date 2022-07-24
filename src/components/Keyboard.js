import { KEYBOARD } from '../constants/keyboard';
import { Button } from '@mui/material';
import { useEffect } from 'react';


export default function Keyboard({ setGuess }) {
    

    return (
        <div className='keyboard'>
            <div className='top-row'>
                <Button>{KEYBOARD.at(0)}</Button>
                <Button>{KEYBOARD.at(1)}</Button>
                <Button>{KEYBOARD.at(2)}</Button>
                <Button>{KEYBOARD.at(3)}</Button>
                <Button>{KEYBOARD.at(4)}</Button>
                <Button>{KEYBOARD.at(5)}</Button>
                <Button>{KEYBOARD.at(6)}</Button>
                <Button>{KEYBOARD.at(7)}</Button>
                <Button>{KEYBOARD.at(8)}</Button>
                <Button>{KEYBOARD.at(9)}</Button>
            </div>

            <div className='middle-row' style={{ textAlign: 'center' }}>
                <Button>{KEYBOARD.at(10)}</Button>
                <Button>{KEYBOARD.at(11)}</Button>
                <Button>{KEYBOARD.at(12)}</Button>
                <Button>{KEYBOARD.at(13)}</Button>
                <Button>{KEYBOARD.at(14)}</Button>
                <Button>{KEYBOARD.at(15)}</Button>
                <Button>{KEYBOARD.at(16)}</Button>
                <Button>{KEYBOARD.at(17)}</Button>
                <Button>{KEYBOARD.at(18)}</Button>
            </div>

            <div className='bottom-row' style={{ textAlign: 'center' }}>
                <Button>{KEYBOARD.at(19)}</Button>
                <Button>{KEYBOARD.at(20)}</Button>
                <Button>{KEYBOARD.at(21)}</Button>
                <Button>{KEYBOARD.at(22)}</Button>
                <Button>{KEYBOARD.at(23)}</Button>
                <Button>{KEYBOARD.at(24)}</Button>
                <Button>{KEYBOARD.at(25)}</Button>
            </div>
        </div>
    )
}