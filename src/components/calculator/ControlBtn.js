import styles from './Calculator.module.scss';

function ControlBtn({control,
    data,
    onClickBtn}) {
    return (
        <button className={styles.calculatorApp__controls__btn} onClick={() => onClickBtn(data)}>{control}</button>
    );
}

export default ControlBtn;