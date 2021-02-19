import React from 'react';
import { Link } from 'react-router-dom';
import Homepage from './Homepage';

const Header = () => {
    return (
        <header>
            <h1 className="header">Welcome to the Onion Blog!</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/addonion'}>Add Onion</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;