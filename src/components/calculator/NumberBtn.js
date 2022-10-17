import styles from './Calculator.module.scss';

function NumberBtn({
    number,
    data,
    onClickBtn
}) {
    return (
        <button className={styles.calculatorApp__controls__btn} onClick={(e) => onClickBtn(e, data)}>{number}</button>
    );
}

export default NumberBtn;