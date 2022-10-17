import { useState } from 'react';
import BackButton from '../BackButton';
import styles from './Calculator.module.scss';
import ControlBtn from './ControlBtn';
import NumberBtn from './NumberBtn';
import OperatorBtn from './OperatorBtn';
import { calculateController } from './utils';

const typeButtonsInOrder = [
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
    {btnType: 'operator', operator: 'addition', operatorSymbol:'+'},
    {btnType: 'number', number: '.'},
    {btnType: 'number', number: 0},
    {btnType: 'control', typeControl: 'equal', controlSymbol:'='},
    {btnType: 'operator', operator: 'subtract', operatorSymbol:'-'},
];

const operatorSymbols = {
    addition: '+',
    subtract: '-',
    multiply: '*',
    divide: '/'
}

function Calclucator() {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [isSecondNumber, setIsSecondNumber] = useState(false);
    const [operator, setOperator] = useState('');
    const [point, setPoint] = useState(false);

    const resetStates = (firstNumber, full) => {
        setFirstNumber(`${firstNumber}`);
        setSecondNumber('');     
        setPoint(false);
        setIsSecondNumber(full ? false : true);
        setOperator('');
        // setOperator(state => full ? '' : state);
    }

    const calculateResult = () => {
        const result = calculateController(firstNumber, secondNumber, operator);
        console.log(result);
        resetStates(result);
    }

    const onPressedOperatorBtn = (btnOperator) => {
        if (isSecondNumber && secondNumber) {
          calculateResult(btnOperator);  
        } else {
            setIsSecondNumber(true);
            setPoint(false);
        }

        setOperator(btnOperator);
    }

    const onPressedPoint = () => {
        if (isSecondNumber && secondNumber && !point) {
            setSecondNumber(state =>  state + '.');        
            setPoint(true);   
        } else if (!isSecondNumber && !point){
            setFirstNumber(state => state ? state + '.' : '0.'); 
            setPoint(true);
        }  
    }

    const onPressedNumberBtn = (number) => {
        if (isSecondNumber && operator) {
            setSecondNumber(state => state + number);
        } else if (!isSecondNumber){
            setFirstNumber(state => state + number);
        }
    }
    
    const onClickBtn = (data) => {
        if (data.btnType === 'number' && data.number !== '.') {
            onPressedNumberBtn(data.number);
        }else if (data.btnType === 'number' && data.number === '.'){
            onPressedPoint();
        } else if (data.btnType === 'operator') {
            onPressedOperatorBtn(data.operator);
        } else if (data.btnType === 'control' && operator && firstNumber && secondNumber) {
            calculateResult(); 
        }
    }

    const screen = `${firstNumber || 0}
            ${firstNumber && operator && operatorSymbols[operator]}
            ${secondNumber}
            `

    return (
        <>
            <BackButton/>
            <h2 className={styles.appTitle}>Calculator</h2>
            <section className={styles.calculatorAppSection}>
                <article className={styles.calculatorApp}>
                    <p className={styles.calculatorApp__resultScreen}>{screen}
                    </p>
                    <div className={styles.calculatorApp__controls}>
                        {typeButtonsInOrder.map(btn => {
                            if(btn.btnType === 'number'){
                                return <NumberBtn number={btn.number} data={btn}
                                onClickBtn={onClickBtn} key={btn.number}/>;
                            } else if (btn.btnType === 'operator') {
                                return <OperatorBtn operator={btn.operatorSymbol} data={btn}
                                onClickBtn={onClickBtn}  key={btn.operator}/>;
                            } else if (btn.btnType === 'control') {
                                return <ControlBtn control={btn.controlSymbol} data={btn}
                                onClickBtn={onClickBtn} key={btn.typeControl}/>
                            }
                        })}
                        <button className={`${styles.calculatorApp__controls__resetBtn} ${styles.calculatorApp__controls__btn}`}
                        onClick={() => resetStates('', true)}>RESET</button>
                    </div>
                </article>
            </section>
        </>
    );
}

export default Calclucator;