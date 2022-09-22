import styles from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import counterApp from './img/counter-app.png';
import temperatureControlApp from './img/temperature-control.png';
import countriesSearchFilter from './img/countries-search-filter.png';

function ProjectsBox() {
    return (
        <>
            <section className={styles.projectsBox}>
                <Link to="counter">
                    <article className={styles.appContainer}>
                        <p className={styles.appTitle}>Counter App</p>
                        <img src={counterApp} alt="Counter App" className={styles.appImg}/>
                    </article>
                </Link>
                <Link to="temperature-control">
                    <article className={styles.appContainer}>
                        <p className={styles.appTitle}>Temperature Control App</p>
                        <img src={temperatureControlApp} alt="Temperature Control App" className={styles.appImg}/>
                    </article>
                </Link>
                <Link to="countries-search-filter">
                    <article className={styles.appContainer}>
                        <p className={styles.appTitle}>Countries Search Filter</p>
                        <img src={countriesSearchFilter} alt="Countries Search Filter" className={styles.appImg}/>
                    </article>
                </Link>
                <Link to="basic-registration-form">
                    <article className={styles.appContainer}>
                        <p className={styles.appTitle}>Basic Registration Form</p>
                        <img src={countriesSearchFilter} alt="Basic Registration Form" className={styles.appImg}/>
                    </article>
                </Link>
            </section>
        </>
    );
}

export default ProjectsBox;