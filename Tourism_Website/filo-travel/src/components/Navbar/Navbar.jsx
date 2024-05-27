import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import mainlogo from '../../assets/filo-travel_logo.png';

class Navbar extends Component{
    state ={clicked: false};
    handleCLick =() =>{
        this.setState({clicked:!this.state.clicked})
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
    render(){
        return (
            <nav className={`container ${this.state.scrolled ? 'scrolled' : ''}`}>
                <img src={mainlogo} alt="" className='logo'/>
                <ul id="navbar" className={this.state.clicked? "#navbar active" : "navbar"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/destination">Destination</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
                <div className='mobile' onClick={this.handleCLick}>
                    <i id="bar" className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
            </nav>
        );
    };
};

export default Navbar;