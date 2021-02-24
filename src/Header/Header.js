import React from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }
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
                <Avatar onClick={signOut} src={user.photoUrl} />
            </div>
        </div>
    );
}

export default Header;