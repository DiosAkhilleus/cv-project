import React from 'react'
import '../App.css'
import Button from './Button'
import { useState } from 'react'

const General = ({ name, contact }) => {

    

    return (
        <div className='general'>
            <div>{name}</div>
            <div>{contact}</div>
            
           
            
        </div>
    )
}

export default General
