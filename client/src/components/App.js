import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Register from './Register';

class App extends Component {
    render() {
        return (
            <div className="container" style={{ width: '95%' }}>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/register" component={Register} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
