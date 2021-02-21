import React from 'react';
import './Option.css';

function Option({ Icon, title, number, selected }) {
    return (
        <div className={`option ${selected && 'option--active'}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
}

export default Option;