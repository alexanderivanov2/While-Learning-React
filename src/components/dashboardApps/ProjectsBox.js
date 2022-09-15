import './Dashboard.css';
import { Link } from 'react-router-dom';
import counterApp from './img/counter-app.png';
import temperatureControlApp from './img/temperature-control.png';

function ProjectsBox() {
    return (
        <>
            <section className='projectsBox'>
                <Link to="counter">
                    <article className='appContainer'>
                        <p className='appTitle'>Counter App</p>
                        <img src={counterApp} alt="Counter App" className='appImg'/>
                    </article>
                </Link>
                <Link to="temperature-control">
                    <article className='appContainer'>
                        <p className='appTitle'>Temperature Control App</p>
                        <img src={temperatureControlApp} alt="Temperature Control App" className='appImg'/>
                    </article>
                </Link>
            </section>
        </>
    );
}

export default ProjectsBox;