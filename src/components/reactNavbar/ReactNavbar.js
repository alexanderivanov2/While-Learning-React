import { useState } from 'react';

import styles from './ReactNavbar.module.css';
import reactLogo from './img/react-icon.svg';
import BackButton from '../BackButton';

function ReactNavbar() {
    return (
        <>
            <div className={styles.navigation}>
                <div className={styles.titleAndLogo}>
                    <h3 className='react-navbar-title'>While Learning React</h3>
                    <img src={reactLogo} alt="React Logo" className={styles.reactLogo}/>
                </div>
            </div>
        </>
    );
}

export default ReactNavbar;