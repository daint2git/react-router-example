import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        label: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        label: 'Giới thiệu',
        to: '/about',
        exact: false
    },
    {
        label: 'Liên hệ',
        to: '/contact',
        exact: false
    },
    {
        label: 'Danh sách sản phẩm',
        to: '/products',
        exact: false
    },
    {
        label: 'Đăng nhập',
        to: '/login',
        exact: false
    }     
];

// <li className={active}>
const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({match}) => {
            let active = match ? 'active test' : '';
            return (
                <li className={`myLi ${active}`}>
                    <Link to={to} className="testLink">
                        {label}
                    </Link>
                </li>
            )
        }}/>
    )
}

export default class Menu extends Component {
    render () {
        return(
            <div>
                {/* Menu */}
                <nav className="navbar navbar-default">
                    <ul className="nav navbar-nav">
                        {this.showMenus(menus)}
                    </ul>
                </nav>
            </div>
        );
    }

    showMenus = (menus) => {
        var result = null;
        
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index}
                    label={menu.label}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}/>                    
                )
            });
        }

        return result;
    }    
}