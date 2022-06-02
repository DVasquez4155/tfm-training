import React from "react";
import Button from 'react-bootstrap/Button';

require('./index.css')

function Nav(props) {
    return (
        <main>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
            <div className="container">
                <a className="navbar-brand logo" href="/tfm-training">
                Training{" "}
                </a>
                
                <div id="navbarNav">
                <ul id="links" className="nav  ml-auto">
                    {/* <li className="nav-item" role="presentation">
                    <Button variant="outline-*" className="nav-link" href="/login">
                        Join Session
                    </Button>
                    </li> */}
                    <li className="mr-3 nav-item" role="presentation">
                    <Button variant="outline-*" className="nav-link" href="/tfm-training">
                        Home
                    </Button>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </main>
    );
}

export default Nav;