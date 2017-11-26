import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import Home from 'ComponentPath/Home';
import Contact from 'ComponentPath/Contact';
import About from 'ComponentPath/About';

// const styleNavLink = {
//     backgroundColor: 'blue',
//     color: 'white'
// }

export default class Root extends Component {

    render () {
        return(
            <Router>
                <div>
                    <nav className="navbar navbar-default">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink to="/" exact activeClassName="activeLink">Trang chủ</NavLink>
                                {/*<NavLink to="/" exact activeStyle={styleNavLink}>Trang chủ</NavLink>*/}
                                {/*<Link to="/">Trang chủ</Link>*/}
                                {/*<a href="/">Trang chủ</a>*/}
                            </li>
                            <li>
                                <NavLink to="/about" activeClassName="activeLink">Liên hệ</NavLink>
                            </li>                            
                            <li>
                                <NavLink to="/contact" activeClassName="activeLink">Giới thiệu</NavLink>
                            </li>
                        </ul>
                    </nav>
                    
                    {/* Content*/}
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} /> 
                </div>
            </Router>
        );
    }
}