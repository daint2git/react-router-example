import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import Product from 'ComponentPath/Product';

var products = [
    {
        id: 1,
        slug: 'ip1',
        name: 'Iphone 1',
        price: '111111'
    },
    {
        id: 1,
        slug: 'ip2',
        name: 'Iphone 2',
        price: '222222'
    },
    {
        id: 1,
        slug: 'ip3',
        name: 'Iphone 3',
        price: '333333'
    },        
]; 

export default class Products extends Component {
    render () {       

        let {match} = this.props;
        let url = match.url;

        return(
            <div className="container">
                <h1>Products</h1>
                <div className="row">
                    <ul className="list-group">
                        {this.showProducts(products, url)}
                    </ul>
                </div>
                
                <div className="row">
                    {/* :slug params */}
                    <Route path="/products/:slug" component={Product} />
                </div>
                
            </div>
        );
    }

    showProducts = (products, url) => {
        var result = null;
        if (products.length) {
            result = products.map((product, index) => {
                return (
                    <NavLink to={`${url}/${product.slug}`} key={index}>
                        <li className="list-group-item">
                            {product.id}, {product.name}, {product.price}
                        </li>
                    </NavLink>
                );
            })
        }
        return result;
    }
}