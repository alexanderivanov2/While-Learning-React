import styles from './BasicRegistrationForm.module.css'

function BasicRegistrationForm() {
    return (
        <>
            <h2 className={styles.title}>Basic Registration Form</h2>  
            <section className={styles.basicRegistrationSection}>
                <form className={styles.basicRegistrationForm}>
                    <input type="text" placeholder="First Name" className={`${styles.inputStructure} ${styles.inputText}`}/>
                    <input type="text" placeholder="Last Name" className={`${styles.inputStructure} ${styles.inputText}` }/>
                    <input type="text" placeholder="Email" className={`${styles.inputStructure} ${styles.inputText}` }/>
                    <input type="submit" className={`${styles.inputStructure} ${styles.inputSubmit}`} value="Register"/>
                </form>
            </section>
        </>
    );
}

export default BasicRegistrationForm;