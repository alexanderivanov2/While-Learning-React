import styles from './BasicRegistrationForm.module.css';

function InvalidInput ({inputsValidData}) {
    const invalidTexts = {
        firstName: 'First Name must content only characters and to have more than 2 symbols',
        lastName: 'Last Name must content only characters and to have more than 2 symbols',
        email: 'Invalid email!',
    }
    
    return (
        <>
           <ul className={styles.InvalidMessage}>
                {Object.entries(inputsValidData).map(([key, value]) => {
                        if(!value) {
                            return <li key={key}>* {invalidTexts[key]}</li>
                        }
                
                    })
                }
           </ul>
        </>
    );
}

export default InvalidInput;