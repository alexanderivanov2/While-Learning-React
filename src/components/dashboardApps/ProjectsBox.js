import './Dashboard.css';
import { Link } from 'react-router-dom';

function ProjectsBox() {
    return (
        <>
            <section className='projectsBox'>
                <Link to="counter">Counter</Link>
            </section>
        </>
    );
}

export default ProjectsBox;