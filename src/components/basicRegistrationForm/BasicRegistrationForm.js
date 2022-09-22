import { useState } from 'react';
import styles from './BasicRegistrationForm.module.css'

function BasicRegistrationForm() {
    const [registrationData, setRegistrationData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

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
        console.log('submit');
    }

    return (
        <>
            <h2 className={styles.title}>Basic Registration Form</h2>  
            <section className={styles.basicRegistrationSection}>
                <form className={styles.basicRegistrationForm}>
                    <input type="text" placeholder="First Name" value={registrationData.firstName} onChange={(e) => onChangeInputText(e, 'firstName')} className={`${styles.inputStructure} ${styles.inputText}`}/>
                    <input type="text" placeholder="Last Name" value={registrationData.lastName} onChange={(e) => onChangeInputText(e, 'lastName')}className={`${styles.inputStructure} ${styles.inputText}` }/>
                    <input type="text" placeholder="Email" value={registrationData.email} onChange={(e) => onChangeInputText(e, 'email')} className={`${styles.inputStructure} ${styles.inputText}` }/>
                    <input type="submit" className={`${styles.inputStructure} ${styles.inputSubmit}`} onClick={onFormSubmit} value="Register" disabled={!isDisabled() ? true : false }/>
                </form>
            </section>
        </>
    );
}

export default BasicRegistrationForm;