import { Checkbox, IconButton } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './List.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Sections from './Sections/Sections';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Row from './Row/Row';
import { db } from '../../firebase';

function List() {
    const [emails, setEmails] = useState([])

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        }))))
    })
    return (
        <div className='list'>
            <div className="list__settings">
                <div className="list__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="list__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="list__sections">
                <Sections Icon={InboxIcon} title='Primary' color='red' selected />
                <Sections Icon={PeopleIcon} title='Social' color='#1A73E8' />
                <Sections Icon={LocalOfferIcon} title='Promotions' color='green' />
            </div>
            <div className="list__main">
                {emails.map(({id, data: {to, subject, message, timestamp}}) => ( 
                    <Row id={id} key={id} title={to} subject={subject} description={message} time={new Date(timestamp?.seconds * 1000).toUTCString()}/>
                ))}
            </div>
        </div>
    );
}

export default List;