import React from 'react'
import '../App.css'

const Build = ({ name, contact }) => {
    return (
        <div>
            <h3 className='name'>{name}</h3>
            <div className='contact'>{contact}</div>
        </div>
    )
}

export default Build
