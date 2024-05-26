import React from 'react'
import './Navbar.css'
import mainlogo from '../../assets/filo-travel_logo.png'
import testlogo from '../../assets/test_only.png'

const Navbar = () => {
    return(
        <nav className='container'>
            <img src={mainlogo} alt="" className='logo'/>
            <ul>
                <li><a>Home</a></li>
                <li><a>Destination</a></li>
                <li><a>About Us</a></li>
            </ul>
        </nav>
    )
}
export default Navbar