/** @format */

import React from "react"
import "./Header.css"
import Search from "./section/Search"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <Search></Search>
            <div className="btn-box">
                <Link to="/login">
                    <button type="button" className="btn">
                        LOGIN
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Header