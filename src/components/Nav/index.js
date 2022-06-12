import React from "react";
import { Link } from "react-router-dom";

require('./index.css')

function Index(props) {
    return (
        <main>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
            <div className="container">
                <Link variant="outline-*" className="navbar-brand logo" to="/">Training</Link>
                <div id="navbarNav">
                <ul id="links" className="nav  ml-auto">
                    <a variant="outline-*" className="nav-link" href="https://dvasquez4155.github.io/TFM/">Home</a>
                    {/* <Link variant="outline-*" className="nav-link" to="/">Testing</Link> */}
                </ul>
                </div>
            </div>
            </nav>
        </main>
    );
}

export default Index;