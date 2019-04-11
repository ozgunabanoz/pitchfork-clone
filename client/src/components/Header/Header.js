import React, { Component } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

import './Header.css';
import Logo from './../../assets/p4klogo.JPG';

class Header extends Component {
    state = {
        links: [
            { name: 'The Latest', url: '/news' },
            { name: 'Reviews', url: '/reviews' },
            { name: 'Best New Music', url: '/bestnewmusic' },
            { name: 'Features', url: '/features' }
        ]
    };

    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {
            coverTrigger: false,
            closeOnClick: true
        });

        let elemsSideNav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elemsSideNav);
    }

    renderLinks() {
        if (this.props.isAuth) {
            return _.map(this.state.links, link => {
                return (
                    <li key={link.name} className="sidenav-close">
                        <Link to={link.url} style={{ fontWeight: 'bold' }}>
                            {link.name}
                        </Link>
                    </li>
                );
            });
        } else {
            return null;
        }
    }

    render() {
        let dropdownLinks = (
            <div>
                <li className="sidenav-close">
                    <Link to="/login" style={{ color: '#1a1a1a' }}>
                        Login
                    </Link>
                </li>
                <li className="sidenav-close">
                    <Link to="/register" style={{ color: '#1a1a1a' }}>
                        Register
                    </Link>
                </li>
            </div>
        );
        let dropdownName = 'Auth';

        if (this.props.isAuth) {
            dropdownLinks = (
                <div>
                    <li className="sidenav-close">
                        <Link to="/logout" style={{ color: '#1a1a1a' }}>
                            Logout
                        </Link>
                    </li>
                </div>
            );
            dropdownName = this.props.username;
        }

        return (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <Link to="/" className="brand-logo">
                                <img src={Logo} />
                            </Link>
                            <a
                                href=""
                                data-target="mobile-demo"
                                className="sidenav-trigger"
                            >
                                <i className="material-icons">menu</i>
                            </a>
                            <ul className="right hide-on-med-and-down">
                                <li className="links">{this.renderLinks()}</li>
                                <li>
                                    <a
                                        className="dropdown-trigger"
                                        data-target="dropdown2"
                                        style={{ fontWeight: 'bold' }}
                                    >
                                        {dropdownName}
                                    </a>
                                    <ul
                                        id="dropdown2"
                                        className="dropdown-content"
                                    >
                                        {dropdownLinks}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <ul className="sidenav" id="mobile-demo">
                    <li className="links">{this.renderLinks()}</li>
                    <li>
                        <a
                            className="dropdown-trigger"
                            data-target="dropdown1"
                            style={{ fontWeight: 'bold' }}
                        >
                            {dropdownName}
                        </a>
                        <ul id="dropdown1" className="dropdown-content">
                            {dropdownLinks}
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.regist.username,
        isAuth: state.regist.username !== null
    };
};

export default connect(mapStateToProps)(Header);
