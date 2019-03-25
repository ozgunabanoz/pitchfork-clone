import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper blue darken-4" style={{ marginTop: '10px' }}>
                    <a className="brand-logo left" style={{ marginLeft: '10px' }}>
                        Logo
                    </a>
                    <ul className="right">
                        <li>
                            <a href="/register" className="btn red lighten-2">
                                Register
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
