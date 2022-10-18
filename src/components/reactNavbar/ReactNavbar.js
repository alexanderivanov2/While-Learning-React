import { useState } from 'react';

import styles from './ReactNavbar.module.css';
import reactLogo from './img/react-icon.svg';
import NavbarSection from './NavbarSection';

const resetState = {
    beginner: false,
    intermediate: false,
    hard: false,
}

function ReactNavbar() {
    const [hoveredNavSections, setHoveredNavSections] = useState({
        beginner: false,
        intermediate: false,
        hard: false,
    });

    const [navbarSectionsActive, setNavbarSectionsActive] = useState({
        beginner: false,
        intermediate: false,
        hard: false,
    });

    const onHover = (e) => {
        const hoverSection = e.currentTarget.id;
        if (!navbarSectionsActive[hoverSection]) {
            setNavbarSectionsActive(state => ({
                ...state,
                [hoverSection]: true,
            }));
            setHoveredNavSections(state => ({
                ...state,
                [hoverSection]: true,
            }));
        }
    };

    const onOutHoverNavbarSectionTitle = (e) => {
        const clientX = e.clientX;
        const clientY = e.clientY;
        const offsetWidth = e.currentTarget.offsetWidth;
        const offsetTop = e.currentTarget.offsetTop
        const offsetLeft = e.currentTarget.offsetLeft;

        if (clientX <= offsetLeft || clientX >= offsetLeft + offsetWidth || clientY <= offsetTop) {
            setHoveredNavSections(resetState);
            setNavbarSectionsActive(resetState);
        }
    };

    const onOutHoverNavbarSection = (e) => {
        setNavbarSectionsActive(resetState);
    }

    return (
        <>
            <div className={styles.navigation}>
                <div className={styles.titleAndLogo}>
                    <h3 className='react-navbar-title'>While Learning React</h3>
                    <img src={reactLogo} alt="React Logo" className={styles.reactLogo}/>
                </div>
                
                <div className={styles.navbar} >
                    <div className={styles.navbarSection} id="beginner" onMouseOver={onHover} onMouseLeave={onOutHoverNavbarSectionTitle}>
                        <h3 className={styles.navSectionName}>Beginner</h3>
                        {navbarSectionsActive.beginner &&
                        <NavbarSection section="beginner" onOutHoverNavbarSection={onOutHoverNavbarSection}/>}
                    </div>
                    <div className={`${styles.navbarSection} ${styles.middle}`} id="intermediate" onMouseOver={onHover}  onMouseLeave={onOutHoverNavbarSectionTitle}>
                        <h3 className={styles.navSectionName} >
                            Intermediate
                        </h3>
                        {navbarSectionsActive.intermediate &&
                        <NavbarSection section="beginner" onOutHoverNavbarSection={onOutHoverNavbarSection}/>}
                    </div>
                    <div className={`${styles.navbarSection} ${styles.end}`} id="hard" onMouseOver={onHover} onMouseLeave={onOutHoverNavbarSectionTitle}>
                        <h3 className={styles.navSectionName} >
                            Hard
                        </h3>    
                        {navbarSectionsActive.hard &&
                        <NavbarSection section="beginner" arrow="end" onOutHoverNavbarSection={onOutHoverNavbarSection}/>}
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default ReactNavbar;