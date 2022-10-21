import styles from './SimpleContactList.module.scss';
import {useState} from 'react';
function Contact({data}) {
    const [contactData, setContactData] = useState(false);

    const onClickShowContact = () => {
        setContactData(state => state ? false : true);
    }

    return (
        <article className={styles.contact}>
            <div className={styles.contact__imageWrapper}>
                <img src={data.picture.large} alt="contact profile pic"/>
            </div>
            <div className={styles.contact__description}>
                <p><span>Name: </span>{data.name.first} {data.name.last}</p>
                <p>Age: {data.dob.age}</p>
                {contactData
                    ?
                        <>
                            <p>Phone: {data.phone}</p>
                            <p>Email: {data.email}</p>
                        </>
                    :
                        ''     
                }
                <button onClick={onClickShowContact}>{contactData ? 'Hide' : 'Show'} Contact</button>
            </div>
        </article>
    );
}

export default Contact;