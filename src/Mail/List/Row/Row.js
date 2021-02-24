import React from 'react';
import './Row.css'
import { Checkbox, IconButton } from '@material-ui/core';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../../features/mailSlice';

function Row({ id, title, subject, description, time }) {
    const history = useHistory();
    const dispatch = useDispatch();

    const openMessage = () => { 
        dispatch(selectMail({ id, title, subject, description, time }))
        history.push('/mail')
    }

    return (
        <div onClick={openMessage} className='row'>
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
                {/* {description} */}
                {time}
            </div>
        </div>
    );
}

export default Row;