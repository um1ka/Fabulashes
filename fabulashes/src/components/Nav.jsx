import React from 'react';
import { Link } from 'react-router-dom';


function Nav(props) {
    return (
        <div className='nav'>
            <Link className='nav_link' to="/">Main</Link>
            <Link className='nav_link' to="/about">About</Link>
            <Link className='nav_link' to="/lookbook">LookBook</Link>
            <Link className='nav_link' to="/gallery">Gallery</Link>
            <Link className='nav_link' to="/appointment">Appointment</Link>
            
            
        </div>
    );
}

export default Nav;