import Cell from './Cell';
import styles from '../Styles.module.css';


export default function Board({ guesses, wordToGuess }) {

    return (
        <div className={styles['board']}>
            {guesses && guesses.map((guess, index) => (
                <div className={styles['word']} key={`word-${index}`}>
                    {guess.map((letter, index) => (
                        <Cell letter={letter} index={index} key={`word-letter-${letter}-${index}`} />
                    ))}
                </div>
            ))}
        </div>
    )
}