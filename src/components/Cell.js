import styles from '../Styles.module.css';


export default function Cell({ letter, index }) {

    return (
        <div className={styles['word-letter']}>{letter}</div>
    )
}