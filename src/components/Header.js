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
                        <Link to='/' component={Homepage}>Home</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;