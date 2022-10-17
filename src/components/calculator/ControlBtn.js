import styles from './Calculator.module.scss';

function ControlBtn({control,
    data,
    onClickBtn}) {
    return (
        <button className={styles.calculatorApp__controls__btn} onClick={(e) => onClickBtn(e, data)}>{control}</button>
    );
}

export default ControlBtn;