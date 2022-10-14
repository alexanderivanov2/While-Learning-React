import styles from './Calculator.module.scss';

function ControlBtn({control}) {
    return (
        <button className={styles.calculatorApp__controls__btn}>{control}</button>
    );
}

export default ControlBtn;