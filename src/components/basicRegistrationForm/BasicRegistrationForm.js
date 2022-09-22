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
        lastName: true,
        email: true,
    })

    const isDisabled = () => {
        return registrationData.firstName && registrationData.lastName && registrationData.email;
    }

    const onChangeInputText = (e, registrationDataKey) => {
        const inputValue = e.target.value;
        console.log(inputValue);
        setRegistrationData(state => ({
            ...state,
            [registrationDataKey]: inputValue,
        }));
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        
        const firstNameValidation = regexTestInput(registrationData.firstName, 'name');
        const lastNameValidation = regexTestInput(registrationData.lastName, 'name');
        const emailValidation = regexTestInput(registrationData.email, 'email');

        if (firstNameValidation && lastNameValidation && emailValidation){
            setIsRegisterSuccessful(true);
        }
    }

    const onBlurInput = (e, typeInput, inputDataType) => {
        const result = e.target.value;
        if (!regexTestInput(result, typeInput)) {
            e.target.classList.add(styles.invalidInput);
            setIsInputsValid(state => ({
                ...state,
                [inputDataType]: false,
            }));
        } else {
            e.target.classList.remove(styles.invalidInput);
            setIsInputsValid(state => ({
                ...state,
                [inputDataType]: true,
            }))
        }
    }

    const onRegisterComplete = () => {
        setIsRegisterSuccessful(false);
    }

    return (
        <>
            <BackButton/>
            <h2 className={styles.title}>Basic Registration Form</h2>  
            
                <section className={styles.basicRegistrationSection}>
                    { isRegisterSuccessful ?
                        <SuccessfullRegister onRegisterComplete={onRegisterComplete}/>
                    :
                    <form className={styles.basicRegistrationForm}>
                        {(!isInputsValid.firstName || !isInputsValid.lastName || !isInputsValid.email) && <InvalidInput inputsValidData={isInputsValid}/>}
                        <input type="text" placeholder="First Name" value={registrationData.firstName}
                        onChange={(e) => onChangeInputText(e, 'firstName')}
                        onBlur={(e) => onBlurInput(e, 'name', 'firstName')}
                        className={`${styles.inputStructure} ${styles.inputText}`}
                        />
                        <input type="text" placeholder="Last Name" value={registrationData.lastName}
                        onChange={(e) => onChangeInputText(e, 'lastName')} 
                        onBlur={(e) => onBlurInput(e, 'name', 'lastName')}  
                        className={`${styles.inputStructure} ${styles.inputText}`}
                        />
                        <input type="text" placeholder="Email" value={registrationData.email}
                        onChange={(e) => onChangeInputText(e, 'email')}
                        onBlur={(e) => onBlurInput(e, 'email', 'email')}
                        className={`${styles.inputStructure} ${styles.inputText}` }/>
                        <input type="submit" className={`${styles.inputStructure} ${styles.inputSubmit}`}
                        value="Register" onClick={onFormSubmit}  
                        disabled={!isDisabled() ? true : false }
                        />
                    </form>
                }   
            </section>
            
        </>
    );
}

export default BasicRegistrationForm;