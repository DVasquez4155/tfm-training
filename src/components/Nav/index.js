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
                    {/* <li className="nav-item" role="presentation">
                    <Button variant="outline-*" className="nav-link" href="/login">
                        Join Session
                    </Button>
                    </li> */}
                    <li className="mr-3 nav-item" role="presentation">
                    <Link variant="outline-*" className="nav-link" to="/">Home</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </main>
    );
}

export default Nav;