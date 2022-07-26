import Cell from './Cell';
import styles from '../Styles.module.css';


export default function Board({ guesses }) {

    return (
        <div className={styles['board']}>
            {guesses && guesses.map((guess, index) => (
                <div className={styles['word']} key={`word-${index}`}>
                    {guess.map(({key, color}, index) => (
                        <Cell 
                            letter={key} 
                            color={color} 
                            index={index} 
                            key={`word-letter-${key}-${index}`} 
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}