import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => (
    <header className="header">
        <h1>E2E Testing with  <span className="pupp">Puppeteer</span> and <span className="jest">Jest</span></h1>
        <div className="navigation">
            <Link className="navigation_link" to="/" exact="true">Home</Link>
            <Link className="navigation_link" to="/login" exact="true">Login</Link>
        </div>
    </header>
);

export default Header;

