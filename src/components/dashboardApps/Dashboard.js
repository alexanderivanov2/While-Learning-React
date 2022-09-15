import React from 'react';
import './Dashboard.css';
import ProjectsBox from './ProjectsBox';


function Dashboard() {
    return(
        <>
            <h2 className='dashboardTitle'>Dashboard For Apps</h2>
            <ProjectsBox/>
        </>
    );
}

export default Dashboard;