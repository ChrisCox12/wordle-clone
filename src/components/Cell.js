import styles from '../Styles.module.css';


export default function Cell({ letter, color, index }) {

    return (
        <div className={styles['word-letter']} style={{ backgroundColor: color }}>{letter}</div>
    )
}