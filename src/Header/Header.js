import React from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Gmail_2020.png" alt="logo" />
                <h3>Gmail</h3>
            </div>
            <div className="header__middle">
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input placeholder='Search mail' type="text" />
                <IconButton>
                    <ArrowDropDownIcon className='header__inputCaret' />
                </IconButton>
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    );
}

export default Header;