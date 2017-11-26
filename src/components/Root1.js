import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from 'ComponentPath/Menu';
import Content from 'ComponentPath/Content';

export default class Root1 extends Component {

    render () {
        return(
            <Router>
                <div>
                    <Menu />
                    <Content />
                </div>
            </Router>
        );
    }
}