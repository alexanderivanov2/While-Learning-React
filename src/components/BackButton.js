import { Link } from 'react-router-dom';
import styles from './dashboardApps/Dashboard.module.css';

function BackButton() {
    return (
        <>
        <Link to="/" className={styles.backBtn}>Back To Dashboard</Link>
        </>
    );
}

export default BackButton;