import { useState } from 'react';
import BackButton from '../BackButton';
import styles from './Counter.module.css';

function Counter() {
    const [countResult, setCountResult] = useState(0);

    const countResultAddition = (e) => {
        setCountResult(state => state + 1);
    }

    const countResultSubtraction = (e) => {
        setCountResult(state => state - 1 < 0 ? 0 : state - 1);
    }

    const stylesControllers = `${styles.subtract} ${styles.control} ${styles.noSelect}`;

    return (
        <>
        <BackButton/>
        <h2 className={styles.counterTitle}>Counter App</h2>
        <section className={styles.counterBox}>
            <h3 className={styles.countResult}>{countResult}</h3>
            <article className={styles.controls}>
                <div className={`${styles.add} ${styles.control} ${styles.noSelect}`} onClick={countResultAddition}>+</div>
                <div className={countResult <= 0 ? `${stylesControllers} ${styles.disabledSubtract}` : stylesControllers} onClick={countResultSubtraction}>-</div>
            </article>
        </section>
        </>
    );
}

export default Counter;