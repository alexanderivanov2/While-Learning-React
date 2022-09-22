import styles from './BasicRegistrationForm.module.css';

function SuccessfullRegister({onRegisterComplete}) {
    return (
        <>  
            <article className={styles.successfullRegisterArticle}>
                <h2 className={styles.successfullMessage}>Register Complete!</h2>  
                <button onClick={onRegisterComplete} className={styles.btnRegisterContinue}>CONTINUE</button>
            </article>
            
        </>
    );
}

export default SuccessfullRegister;