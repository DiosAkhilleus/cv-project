import React from 'react'
import { useState } from 'react';
import '../App.css';

function General() {

    const [updateActive, setUpdateActive] = useState (false);
    const [text, setText] = useState ("false");
    const [first, setFirst] = useState("First Name");
    const [active, setActive] = useState(false);

    function update() {
        setUpdateActive(!updateActive);
        updateActive ? setText('true') : setText('false');
        //console.log(updateActive);
    }

    
    return (
        <div>
            <h1 onClick={update}>{text}</h1>
            <h1>General Info</h1>
            <input className='general-input' type='text' placeholder='First Name' />
            <input className='general-input' type='text' placeholder='Last Name' />
           
            <button className='edit-button'>Edit</button>
            <br />

        </div>
    )
}

export default General
