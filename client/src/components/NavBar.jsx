import "../css/navbar.css"
import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom"

const NavBar = () => {

    const navigate = useNavigate()
    const backHome = () => navigate("/")
    const goToReg = () => navigate("/register")
    const goToLog = () => navigate("/login")

    return (
        <div className="navBar">
            <div className="navContainer">
                <span onClick={backHome} className="logo">Book And Go</span>
                {/* navBar items */}
                <div className="navItems">
                    <button className="navButton" onClick={goToReg}>Register</button>
                    <button className="navButton" onClick={goToLog}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default NavBar;