import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import mainlogo from '../../assets/filo-travel_logo.png';

class Navbar extends Component {
    state = { clicked: false, scrolled: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    handleScroll = () => {
        if (window.scrollY > 50) {
            this.setState({ scrolled: true });
        } else {
            this.setState({ scrolled: false });
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return (
            <nav className={`container ${this.state.scrolled ? 'scrolled' : ''}`}>
                <img src={mainlogo} alt="" className='logo' />
                <ul id="navbar" className={this.state.clicked ? "active" : ""}>
                    <li>
                        <NavLink exact to="/" activeClassName="active-link">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/destination" activeClassName="active-link">
                            Destination
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active-link">
                            About Us
                        </NavLink>
                    </li>
                </ul>
                <div className='mobile' onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        );
    }
}

export default Navbar;
