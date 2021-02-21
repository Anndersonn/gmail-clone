import React from 'react';
import './Sections.css'


function Sections({ Icon, title, color, selected }) {
    return (
        <div style={{ borderBottom: `3px solid ${color}`, color: `${selected && color}` }} className={`section ${selected && 'section--active'} `}>
            <Icon />
            <h4>{title}</h4>
        </div>
    );
}

export default Sections;