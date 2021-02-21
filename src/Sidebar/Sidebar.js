import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import './Sidebar.css'
import AddIcon from '@material-ui/icons/Add';
import Option from './Option/Option'
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';

function Sidebar() {
    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon fontSize='large' />} className='sidebar__compose'>
                Compose
            </Button>
            <Option title='Inbox' Icon={InboxIcon} number={54} selected={true}/>
            <Option title='Starred' Icon={StarIcon} number={54} />
            <Option title='Snoozed' Icon={AccessTimeIcon} number={54} />
            <Option title='Important' Icon={LabelImportantIcon} number={54} />
            <Option title='Sent' Icon={NearMeIcon} number={54} />
            <Option title='Drafts' Icon={NoteIcon} number={54} />
            <Option title='More' Icon={ExpandMoreIcon} number={54} />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <PersonIcon /> 
                    </IconButton>
                    <IconButton>
                        <DuoIcon /> 
                    </IconButton>
                    <IconButton>
                        <PhoneIcon /> 
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;