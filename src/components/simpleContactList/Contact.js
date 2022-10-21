import styles from './SimpleContactList.module.scss';

function Contact({data}) {
    return (
        <article className={styles.contact}>
            <div className={styles.contact__imageWrapper}>
                <img src={data.picture.large} alt="contact profile pic"/>
            </div>
            <div className={styles.contact__description}>
                <p><span>Name: </span>{data.name.first} {data.name.last}</p>
                <p>Age: {data.dob.age}</p>
                <button>Show Contact</button>
            </div>
        </article>
    );
}

export default Contact;