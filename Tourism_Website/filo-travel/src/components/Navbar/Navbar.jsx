import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import mainlogo from '../../assets/filo-travel_logo.png';

const Navbar = () => {
    return (
        <nav className='container'>
            <img src={mainlogo} alt="" className='logo'/>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/destination">Destination</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;