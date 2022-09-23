const regexPatterns = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    firstName: /^[a-zA-Z]+$/,
    lastName: /^[a-zA-Z]+$/,
}

const regexTestInput = (str, typeInput) => {
    const result = regexPatterns[typeInput].test(str);

    if (typeInput.includes('Name') && str.length < 2) {
        return false;
    }
    
    return result;
} 


export {
    regexTestInput,
};