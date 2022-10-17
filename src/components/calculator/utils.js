const convertParamToNumber = (n) => {
    return n === '' ? 0 : Number(n);
}

const addCalc = (n1, n2) => {
    return n1 + n2;
} 

const subtractOperator = (n1, n2) => {
    return n1 - n2;
} 

const multiplyOperator = (n1, n2) => {
    return n1 * n2;
} 

const divideOperator = (n1, n2) => {
    if (n1 === 0 || n2 === 0) {
        return 0;
    }
    return n1 / n2;
}


const calculatorFunctionsMapper = {
    'addition': addCalc,
    'multiply': multiplyOperator,
    'subtract': subtractOperator,
    'divide': divideOperator,
}

const calculateController = (n1, n2, operator) => {
    n1 = convertParamToNumber(n1); 
    n2 = convertParamToNumber(n2);
    const calculatorFunction = calculatorFunctionsMapper[operator];

    return calculatorFunction(n1, n2); 
}

export {
    calculateController,
}