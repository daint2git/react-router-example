import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Products from 'ComponentPath/Products';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: ''
        };
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.cheked : target.value;
        this.setState({
            [name]: value
        });
    }

    onLogin = (e) => {
        e.preventDefault();

        let {user, pass} = this.state;
        if(user === 'user' && pass ==='pass') {
            localStorage.setItem('Login', JSON.stringify({
                userName: user,
                password: pass
            }));
        }
    }

    render () {
        let {user, pass} = this.state;
        let loggedInUser = localStorage.getItem('Login');
        console.log(loggedInUser)
        
        let {location } = this.props;
        console.log('Login',location)
        if(JSON.parse(loggedInUser) !== null) {
            return <Redirect to={{
                pathname: "/products",
                state: {
                    from: location
                }
            }}/>
        }
        

        return(
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    
                    <form onSubmit={this.onLogin}>
                        <legend>Form title</legend>
                    
                        <div className="form-group">
                            <label>User</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Input field"
                                name="user"
                                value={user}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Pass</label>
                            <input 
                                type="password"
                                className="form-control"
                                placeholder="Input field"
                                name="pass"
                                value={pass}
                                onChange={this.onChange}
                            />
                        </div>                    
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    
                </div>
            </div>
            
        );
    }
}