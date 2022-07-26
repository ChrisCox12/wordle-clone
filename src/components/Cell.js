import styles from '../Styles.module.css';


export default function Cell({ letter, color }) {

    return (
        <div className={styles['word-letter']} style={{ backgroundColor: color }}>{letter}</div>
    )
}