const regexPatterns = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    name: /^[a-zA-Z]+$/,
}

const regexTestInput = (str, typeInput) => {
    const result = regexPatterns[typeInput].test(str);

    if (typeInput === 'name' && str.length < 2) {
        return false;
    }
    
    return result;
} 


export {
    regexTestInput,
};