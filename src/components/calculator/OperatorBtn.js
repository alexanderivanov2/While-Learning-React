import styles from './Calculator.module.scss';

function OperatorBtn ({operator,
    data,
    onClickBtn}) {
    return (
        <button className={styles.calculatorApp__controls__btn} onClick={(e) => onClickBtn(e, data)}>{operator}</button>
    );
}

export default OperatorBtn;
