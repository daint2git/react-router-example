import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'ComponentPath/Home';
import Contact from 'ComponentPath/Contact';
import About from 'ComponentPath/About';
import Products from 'ComponentPath/Products';
import NotFound from 'ComponentPath/NotFound';
import Login from 'ComponentPath/Login';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/products',
        exact: false,
        main: ({match, location}) => <Products match={match} location={location} />
    }, 
    {
        path: '/login',
        exact: false,
        main: ({location}) => <Login location={location}/>
    },    
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }           
];

export default class Content extends Component {
    render () {
        return(
            <div>    
                {/* Content */}
                <Switch>
                    {this.showRoutes(routes)}
                </Switch>
            </div>
        );
    }

    showRoutes = (routes) => {
        var result = null;

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />                    
                )
            });            
        }

        return result;
    }
}

// export default class Content extends Component {
//     render () {
//         return(
//             <div>    
//                 {/* Content */}
//                 <Switch>
//                     <Route path="/" exact component={Home} />
//                     <Route path="/about" component={About} />
//                     <Route path="/contact" component={Contact} />
//                     <Route component={NotFound} />
//                 </Switch>
//             </div>
//         );
//     }
// }