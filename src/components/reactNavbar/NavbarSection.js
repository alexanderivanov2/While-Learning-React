import { Link } from 'react-router-dom';
import styles from './ReactNavbar.module.css';

const sectionLinks = {
    'beginner': [
        {name: "Counter App", to: "/counter"},
        {name: "Temperature Control App", to: "/temperature-control"},
        {name: "Countries Search Filter App", to: "/countries-search-filter"},
        {name: "Basic Registration Form", to: "/basic-registration-form"},
        {name: "React Movie Mini Quiz", to: "/react-movie-mini-quiz"},
    ]
};

function NavbarSection({
    onOutHoverNavbarSection,
    section: sectionName,
}) {
    return (
        <>
            <div className={styles.choosenSection} id="additionalSection"  onMouseLeave={onOutHoverNavbarSection}>
                {sectionLinks[sectionName].map(x => <Link to={`${x.to}`} onClick={onOutHoverNavbarSection} className={styles.navbarLink} key={x.name}>
                    {x.name}
                    </Link>)}
            </div>
        </>
    )
}

export default NavbarSection;