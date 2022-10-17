import styles from './Calculator.module.scss';

function OperatorBtn ({operator,
    data,
    onClickBtn}) {
    return (
        <button className={styles.calculatorApp__controls__btn} onClick={() => onClickBtn(data)}>{operator}</button>
    );
}

export default OperatorBtn;
