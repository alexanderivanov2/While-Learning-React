import { useState } from 'react';
import styles from './Calculator.module.scss';
import ControlBtn from './ControlBtn';
import NumberBtn from './NumberBtn';
import OperatorBtn from './OperatorBtn';

const typeButtons = [
    {btnType: 'number', number: 7},
    {btnType: 'number', number: 8},
    {btnType: 'number', number: 9},
    {btnType: 'operator', operator: 'divide', operatorSymbol:'/'},
    {btnType: 'number', number: 4},
    {btnType: 'number', number: 5},
    {btnType: 'number', number: 6},
    {btnType: 'operator', operator: 'multiply', operatorSymbol:'x'},
    {btnType: 'number', number: 1},
    {btnType: 'number', number: 2},
    {btnType: 'number', number: 3},
    {btnType: 'operator', operator: 'plus', operatorSymbol:'+'},
    {btnType: 'control', typeControl: 'point', controlSymbol:'.'},
    {btnType: 'number', number: 0},
    {btnType: 'control', typeControl: 'equal', controlSymbol:'='},
    {btnType: 'operator', operator: 'minus', operatorSymbol:'-'},
];

function Calclucator() {
    const [calculatorState, setCalculatorState] = useState({
        firstNumber: '',
        secondNumber: '',
        isSecondNumber: false,
        operator: '',
    });
    

    return (
        <>
            <h2 className={styles.appTitle}>Calculator</h2>
            <section className={styles.calculatorAppSection}>
                <article className={styles.calculatorApp}>
                    <p className={styles.calculatorApp__resultScreen}>0</p>
                    <div className={styles.calculatorApp__controls}>
                        {typeButtons.map(btn => {
                            if(btn.btnType === 'number'){
                                return <NumberBtn number={btn.number} key={btn.number}/>;
                            } else if (btn.btnType === 'operator') {
                                return <OperatorBtn operator={btn.operatorSymbol} key={btn.operator}/>;
                            } else if (btn.btnType === 'control') {
                                return <ControlBtn control={btn.controlSymbol} key={btn.typeControl}/>
                            }
                        })}
                    </div>
                </article>
            </section>
        </>
    );
}

export default Calclucator;