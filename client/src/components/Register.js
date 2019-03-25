import React from 'react';

const dashboard = () => {
    return (
        <div style={{ marginTop: '20px' }}>
            <div className="row">
                <form className="col s9 offset-s3">
                    <div className="row">
                        <div className="input-field col s8">
                            <input id="username" type="text" className="validate" />
                            <label className="active" for="username">
                                Username
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s8">
                            <input id="password" type="password" className="validate" />
                            <label className="active" for="password">
                                Password
                            </label>
                        </div>
                    </div>
                    <div className="row">
                        <div class="input-field col s8">
                            <input id="email" type="email" className="validate" />
                            <label className="active" for="email">
                                Email
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div className="center-align">
                <button
                    className="btn-flat red lighten-2 white-text"
                    style={{ marginLeft: '10px' }}
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default dashboard;
