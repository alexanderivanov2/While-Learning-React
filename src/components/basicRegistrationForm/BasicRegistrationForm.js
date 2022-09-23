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

    const onChangeInputText = (e) => {
        const inputValue = e.target.value;
        const registrationDataKey = e.target.name;
        setRegistrationData(state => ({
            ...state,
            [registrationDataKey]: inputValue,
        }));
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        
        const firstNameValidation = regexTestInput(registrationData.firstName, 'firstName');
        const lastNameValidation = regexTestInput(registrationData.lastName, 'lastName');
        const emailValidation = regexTestInput(registrationData.email, 'email');

        if (firstNameValidation && lastNameValidation && emailValidation){
            setIsRegisterSuccessful(true);
        }
    }

    const onBlurInput = (e) => {
        const result = e.target.value;
        const inputDataType = e.target.name;
        if (!regexTestInput(result, inputDataType)) {
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
            }));
        }
    }

    const onRegisterComplete = () => {
        setIsRegisterSuccessful(false);
        setRegistrationData(state =>({
            ...state,
            firstName: '',
            lastName: '',
            email: '',
        }))
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
                        <input type="text" name="firstName" placeholder="First Name" value={registrationData.firstName}
                        className={`${styles.inputStructure} ${styles.inputText}`}
                        onChange={onChangeInputText}
                        onBlur={onBlurInput}
                        />
                        <input type="text" name="lastName" placeholder="Last Name" value={registrationData.lastName}
                        className={`${styles.inputStructure} ${styles.inputText}`}
                        onChange={onChangeInputText} 
                        onBlur={onBlurInput}
                        />
                        <input type="text" name="email" placeholder="Email" value={registrationData.email}
                        className={`${styles.inputStructure} ${styles.inputText}`}
                        onChange={onChangeInputText}
                        onBlur={onBlurInput}
                        />
                        <input type="submit" className={`${styles.inputStructure} ${styles.inputSubmit}`}
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