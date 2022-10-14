import styles from './Calculator.module.scss';

function OperatorBtn ({operator}) {
    return (
        <button className={styles.calculatorApp__controls__btn}>{operator}</button>
    );
}

export default OperatorBtn;
