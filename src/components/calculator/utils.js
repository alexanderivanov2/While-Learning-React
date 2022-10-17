const convertParamToNumber = (n) => {
    return n === '' ? 0 : Number(n);
}

const addCalc = (n1, n2) => {
    return n1 + n2;
} 

const reduceCalc = (n1, n2) => {
    return n1 - n2;
} 

const multiplyCalc = (n1, n2) => {
    return n1 * n2;
} 

const divide = (n1, n2) => {
    if (n1 === 0 || n2 === 0) {
        return 0;
    }
    return n1 / n2;
}


const calcFuncDict = {
    'plus': addCalc,
    'multiply': multiplyCalc,
    'minus': reduceCalc,
    'divide': divide,
}

const calculateController = (n1, n2, operator) => {
    n1 = convertParamToNumber(n1); 
    n2 = convertParamToNumber(n2);
    const calcFunc = calcFuncDict[operator];

    return calcFunc(n1, n2); 
}

export {
    calculateController,
}