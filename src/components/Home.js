import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

export default class Home extends Component {
    render () {
        return(
            <div>
                Home
                <button type="button" className="btn btn-default">Cho phep</button>
                <button type="button" className="btn btn-danger">Khong cho phep</button>
                <Prompt 
                    when={true}
                    message={location => (`Ban co chac chan muon den ${location.pathname}`)}
                />                
            </div>
        );
    }
}