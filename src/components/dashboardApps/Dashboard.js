import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Counter from '../counter/Counter';
import './Dashboard.css';
import ProjectsBox from './ProjectsBox';


function Dashboard() {
    return(
        <>
            <h2 className='dashboardTitle'>Dashboard For Apps</h2>
          
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<ProjectsBox/>}/>
                        <Route path='/counter' element={<Counter/>}/>
                    </Routes>
                </BrowserRouter>
        </>
    );
}

export default Dashboard;