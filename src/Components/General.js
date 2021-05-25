import React from 'react'
import { useState } from 'react';
import '../App.css';

function General() {

    const [updateActive, setUpdateActive] = useState (false);
    const [first, setFirst] = useState("First Name");

    const changeFirst = () => {
        console.log('click');
    }

    
    return (
        <div>
            
            <input className='general-input' type='text' placeholder='First Name' />
            <input className='general-input' type='text' placeholder='Last Name' />
           
            <button className='edit-button'>Edit</button>
            <br />

        </div>
    )
}

export default General
