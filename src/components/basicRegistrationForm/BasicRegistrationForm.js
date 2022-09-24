import { useState } from 'react';
import BackButton from '../BackButton';
import styles from './BasicRegistrationForm.module.css'
import InvalidInput from './InvalidInput';
import SuccessfullRegister from './SuccessfullRegister';
import { regexTestInput } from './utils';

function BasicRegistrationForm() {
    const [isRegisterSuccessful, setIsRegisterSuccessful] = useState(false);
    const [registrationData, setRegistrationData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const [isInputsValid, setIsInputsValid] = useState({
        firstName: true,
        lastName:true,
        email: true,
    });

    const inputsClasses = {
        firstName: `${styles.inputStructure} ${styles.inputText} ${!isInputsValid.firstName && styles.invalidInput}`,
        lastName: `${styles.inputStructure} ${styles.inputText} ${!isInputsValid.lastName && styles.invalidInput}`,
        email: `${styles.inputStructure} ${styles.inputText} ${!isInputsValid.email && styles.invalidInput}`,
        submitBtn: `${styles.inputStructure} ${styles.inputSubmit}`,
    };
    
    const isDisabled = () => {
        return registrationData.firstName && registrationData.lastName && registrationData.email;
    };

    const checkForInputRequirements = (result, inputDataType) => {
        if (!regexTestInput(result, inputDataType)) {
            setIsInputsValid(state => ({
                ...state,
                [inputDataType]: false,
            }));
        } else if (!isInputsValid[inputDataType]) {
            setIsInputsValid(state => ({
                ...state,
                [inputDataType]: true,
            }));
        }
    };

    const onBlurInput = (e) => {
        const result = e.target.value;
        const inputDataType = e.target.name;
        checkForInputRequirements(result, inputDataType);
    };

    const onChangeInputText = (e) => {
        const inputValue = e.target.value;
        const registrationDataKey = e.target.name;
        setRegistrationData(state => ({
            ...state,
            [registrationDataKey]: inputValue,
        }));
        checkForInputRequirements(inputValue, registrationDataKey);
    };

    const checkIsRegisterSuccessful = () => Object.keys(registrationData)
            .map(key => {
                return key;
            })
            .every((key) =>  {
                return registrationData[key] && isInputsValid[key]
            });

    const onFormSubmit = (e) => {
        e.preventDefault();

        if (checkIsRegisterSuccessful()) {
            setIsRegisterSuccessful(true);
        }
    };

    const onRegisterComplete = () => {
        setIsRegisterSuccessful(false);
        setRegistrationData(state =>({
            ...state,
            firstName: '',
            lastName: '',
            email: '',
        }));
    };

    return (
        <>
            <BackButton/>
            <h2 className={styles.title}>Basic Registration Form</h2>  
            
                <section className={styles.basicRegistrationSection} onSubmit={onFormSubmit}>
                    { isRegisterSuccessful ?
                        <SuccessfullRegister onRegisterComplete={onRegisterComplete}/>
                    :
                    <form className={styles.basicRegistrationForm}>
                        {(!isInputsValid.firstName || !isInputsValid.lastName || !isInputsValid.email) && <InvalidInput inputsValidData={isInputsValid}/>}
                        <input type="text" name="firstName" placeholder="First Name" value={registrationData.firstName}
                        className={inputsClasses.firstName}
                        onChange={onChangeInputText}
                        onBlur={onBlurInput}
                        />
                        <input type="text" name="lastName" placeholder="Last Name" value={registrationData.lastName}
                        className={inputsClasses.lastName}
                        onChange={onChangeInputText} 
                        onBlur={onBlurInput}
                        />
                        <input type="text" name="email" placeholder="Email" value={registrationData.email}
                        className={inputsClasses.email}
                        onChange={onChangeInputText}
                        onBlur={onBlurInput}
                        />
                        <input type="submit" className={inputsClasses.submitBtn}
                        value="Register" disabled={!isDisabled() ? true : false }
                        onClick={onFormSubmit}  
                        />
                    </form>
                }   
            </section>
            
        </>
    );
}

export default BasicRegistrationForm;