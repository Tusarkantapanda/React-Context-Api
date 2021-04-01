import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <div>

            <Nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
                <ul className="navbar-nav ">
                    <li className="nav-item pr-5"><Link to='/' className="nav-link">Home</Link></li>
                    <li className="nav-item pr-5"><Link to='/Contact' className="nav-link">Contact</Link></li>
                    <li className="nav-item pr-5"><Link to='/Feedback' className="nav-link">Feedback</Link></li>
                    
                </ul>
                <div className="form-1">
                <input className="form-control" type="search" placeholder="Search"></input>
                </div>
            </Nav>









        </div>
    )
}

export default Navbar;