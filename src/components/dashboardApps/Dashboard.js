import React from 'react';
import styles from './Dashboard.module.css';
import ProjectsBox from './ProjectsBox';


function Dashboard() {
    return(
        <>
            <h2 className={styles.dashboardTitle}>Dashboard For Apps</h2>
            <ProjectsBox/>
        </>
    );
}

export default Dashboard;