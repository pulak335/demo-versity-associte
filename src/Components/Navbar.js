import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{background:"#D7DFE6", marginTop:"-25px"}} className="container navbar navbar-expand-lg navbar-light rounded-top">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-own-color nav-link active" aria-current="page" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-own-color nav-link" href="#">ABOUT US</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-own-color nav-link" href="#">NEWS & EVENTS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-own-color nav-link" href="#">REGISTRY</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-own-color nav-link" href="#">ONLINE LIBRARY</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-own-color nav-link" href="#">UNIVERSITY SHOP</a>
                    </li>
                </ul>
                    <form className="d-flex">
                        <Link to="/studentverify">
                    <button className="btn btn-outline-success" type="submit">Verify Student</button></Link>
                </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;