import React from 'react';


function NavBar({ currentPage, handlePageChange }) {


    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    href="#aboutme"
                    onClick={() => handlePageChange('AboutMe')}
                    //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
                    //Conditional statement to determine what to display
                    className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
                    //Conditional statement to determine what to display
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
        </ul>
    )
}

export default NavBar;

