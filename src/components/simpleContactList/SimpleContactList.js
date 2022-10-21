import { useState, useEffect } from "react";
import BackButton from "../BackButton";
import Contact from "./Contact";
import styles from "./SimpleContactList.module.scss";

const contactsURL = 'https://randomuser.me/api/?results=10';

function SimpleContactList() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch(contactsURL)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setContacts(data.results);
            });
    }, []);
    return (
        <>
            <BackButton/>
            <h2 className={styles.appTitle}>Simple Contact List</h2>
            <section className={styles.contactList}>
                <h2 className={styles.contactList__title}>My Contact List</h2>
                {contacts.map(contact => <Contact key={contact.cell} data={contact}/>)}
            </section>
        </>
    );
}

export default SimpleContactList;