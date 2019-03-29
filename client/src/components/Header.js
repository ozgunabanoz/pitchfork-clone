import React, { Component } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

class Header extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, { hover: true, closeOnClick: true });
    }

    render() {
        return (
            <nav style={{ margin: '0 auto', width: '98%' }}>
                <div className="nav-wrapper grey darken-3" style={{ marginTop: '10px' }}>
                    <Link to="/" className="brand-logo left" style={{ marginLeft: '10px' }}>
                        Logo
                    </Link>
                    <div className="right" style={{ marginRight: '20px' }}>
                        <a className="dropdown-trigger" data-target="dropdown1">
                            Login / Register
                        </a>

                        <ul id="dropdown1" className="dropdown-content">
                            <li>
                                <a style={{ color: '#424242' }} href="/login">
                                    Login
                                </a>
                            </li>
                            <li>
                                <a style={{ color: '#424242' }} href="/register">
                                    Register
                                </a>
                            </li>
                            <li>
                                <a style={{ color: '#424242' }} href="/logout">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
