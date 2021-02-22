import React from 'react';
import './Row.css'
import { Checkbox, IconButton } from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';

function Row({ id, title, subject, description, time }) {
    const history = useHistory();
    return (
        <div onClick={() => history.push('/mail')} className='row'>
            <div className="row__options">
                <Checkbox />

                <IconButton>
                    <StarOutlineIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
            </div>
            <h3 className="row__title">
                {title}
            </h3>
            <div className="row__message">
                <h4>
                    {subject}{' '}
                    <span className='row__description'>- {description}</span>
                </h4>
            </div>
            <div className="row__time">
                {description}
                {time}
            </div>
        </div>
    );
}

export default Row;