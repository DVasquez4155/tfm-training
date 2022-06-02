import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

require('./index.css')

function Nav(props) {
    return (
        <main>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
            <div className="container">
                <Link variant="outline-*" className="navbar-brand logo" to="/">Training</Link>
                <div id="navbarNav">
                <ul id="links" className="nav  ml-auto">
                    <Link variant="outline-*" className="nav-link" to="/">Home</Link>
                    <a variant="outline-*" className="nav-link" href="https://dvasquez4155.github.io/Closing-Report/">Closing Report</a>
                    {/* <Link variant="outline-*" className="nav-link" to="/">Testing</Link> */}
                </ul>
                </div>
            </div>
            </nav>
        </main>
    );
}

export default Nav;