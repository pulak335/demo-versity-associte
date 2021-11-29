import React from 'react'
import Navbar from './Navbar'

function Header() {

    return (
        <div>
        <div style={{background:"#00245e"}}>
            <div className="container py-5">
                <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand text-white">University Logo</a>
                    <div className="d-flex nav-item">
                            <a href="#" className="nav-link">English</a>
                            <span class="border border-end text-white"></span>
                            <a href="#" className="nav-link">Help</a>
                            <span class="border border-end text-white"></span>
                            <a href="#" className="nav-link">Explore the University wales</a>
                            
                    </div>
                </div>
                </nav>
            </div>
            </div>
            <Navbar></Navbar>
        </div>
    )
}

export default Header
