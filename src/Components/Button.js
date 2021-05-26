import React from 'react'

const Button = ({ handleSubmit }) => {


    return <button type='submit' onClick={handleSubmit} className='btn'>Submit</button>
}

export default Button
