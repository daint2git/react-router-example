import React, { Component } from 'react';

export default class Product extends Component {
    render () {

        let { match } = this.props;
        console.log(match)
        let slug = match.params.slug;

        return(
            <div>
                Product {slug}
            </div>
        );
    }
}