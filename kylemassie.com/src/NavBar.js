import React, { useState } from 'react';
import './NavBar.css';
import LinkedInIcon from './LinkedInIcon';
import GitHubIcon from './GitHubIcon';
import EmailIcon from './EmailIcon';



function NavBar() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    const closeNav = () => {
        setIsNavVisible(false);
    };

    return (
        <header className="NavBar">
            <div className="NavBar-socials">
                <a href="https://www.linkedin.com/in/kyle-j-massie/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/kylejm" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </a>
                <a href="mailto:kylejmassie@gmail.com" target="_blank" rel="noopener noreferrer">
                    <EmailIcon />
                </a>
                
            </div>
            <div className="menu-icon" onClick={toggleNav}>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </div>

            <nav className={`nav-drawer ${isNavVisible ? 'visible' : ''}`}>
                <ul className='NavBar-links'>
                    <li><a href="#about" onClick={closeNav}>About</a></li>
                    <li><a href="#projects" onClick={closeNav}>Projects</a></li>
                    <li><a href="#experience" onClick={closeNav}>Experience</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;