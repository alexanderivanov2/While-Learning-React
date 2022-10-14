import styles from './Calculator.module.scss';

function NumberBtn({
    number,
}) {
    return (
        <button className={styles.calculatorApp__controls__btn}>{number}</button>
    );
}

export default NumberBtn;