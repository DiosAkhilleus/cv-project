import React from 'react'
import '../App.css'

const General = ({ handleChange, handleSubmit, handleEdit, editName, editCont, first, last, phone, email  }) => {

    return (
        <div>
            <h3 className='title'>Personal Information</h3>
            <form>
                <input className='input' type='text' required={true} style={{pointerEvents : editName ? 'none' : 'all'}} placeholder='First Name' value={first} onChange={(e) => handleChange(e, 'first')} />
                <input className='input' type='text' required={true} style={{pointerEvents : editName ? 'none' : 'all'}} placeholder='Last Name' value={last} onChange={(e) => handleChange(e, 'last')}/>
                {!editName ? <button type='submit' onClick={(e) => handleSubmit(e, 'name')} className='btn'>Confirm Name</button> : ''}
                {editName ? <button type='button' onClick={(e) => handleEdit(e, 'name')} className='btn' style={{}}>Edit</button> : ''}
            </form> 
            <form>
                <input className='input' type='text' required={true} style={{pointerEvents : editCont ? 'none' : 'all'}} placeholder='Phone #' value={phone} onChange={(e) => handleChange(e, 'phone')} />
                <input className='input' type='text' required={true} style={{pointerEvents : editCont ? 'none' : 'all'}} placeholder='Email' value={email} onChange={(e) => handleChange(e, 'email')}/>
                {!editCont ? <button type='submit' onClick={(e) => handleSubmit(e, 'cont')} className='btn'>Confirm Contact</button> : ''}
                {editCont ? <button type='button' onClick={(e) => handleEdit(e, 'cont')} className='btn'>Edit</button> : ''}
            </form> 
        </div>
    )
}

export default General
