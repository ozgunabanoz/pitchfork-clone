import React, { Component } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';

class Header extends Component {
    state = {
        links: [
            { name: 'The Latest', url: '/latest' },
            { name: 'Reviews', url: '/reviews' },
            { name: 'Best New Music', url: '/bestnewmusic' },
            { name: 'Features', url: '/features' },
            { name: 'Levels', url: '/levels' },
            { name: 'Video', url: '/video' },
            { name: 'Events', url: '/events' }
        ]
    };

    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {
            coverTrigger: false,
            hover: true,
            closeOnClick: true
        });
    }

    renderLinks() {
        if (this.props.isAuth) {
            return _.map(this.state.links, link => {
                return (
                    <li key={link.name}>
                        <Link to={link.url}>{link.name}</Link>
                    </li>
                );
            });
        } else {
            return null;
        }
    }

    render() {
        let dropdownLinks = (
            <ul id="dropdown1" className="dropdown-content">
                <li>
                    <Link style={{ color: '#424242' }} to="/login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link style={{ color: '#424242' }} to="/register">
                        Register
                    </Link>
                </li>
            </ul>
        );
        let dropdownName = 'Auth';

        if (this.props.isAuth) {
            dropdownLinks = (
                <ul id="dropdown1" className="dropdown-content">
                    <li>
                        <Link style={{ color: '#424242' }} to="/logout">
                            Logout
                        </Link>
                    </li>
                </ul>
            );
            dropdownName = this.props.username;
        }

        return (
            <nav style={{ margin: '0 auto', width: '98%' }}>
                <div
                    className="nav-wrapper grey darken-3"
                    style={{ marginTop: '10px' }}
                >
                    <Link
                        to="/"
                        className="brand-logo left"
                        style={{ marginLeft: '10px' }}
                    >
                        Logo
                    </Link>
                    <ul className="right" style={{ marginRight: '30px' }}>
                        <li style={{ marginRight: '20px' }}>
                            {this.renderLinks()}
                        </li>
                        <li>
                            <i className="large material-icons">
                                account_circle
                            </i>
                        </li>
                        <li>
                            <a
                                className="dropdown-trigger"
                                data-target="dropdown1"
                            >
                                {dropdownName}
                            </a>
                            {dropdownLinks}
                        </li>
                    </ul>
                </div>
            </nav>
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
