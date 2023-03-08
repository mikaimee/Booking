import "../css/navbar.css"
import React from 'react'

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navContainer">
                <span className="logo">Book</span>
                {/* navBar items */}
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;