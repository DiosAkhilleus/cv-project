import React from 'react'

function Education({  handleChange, eduCount, handleDel, key  }) {

    return (
        <div className='experience' style={eduCount === 1 ? {paddingBottom : '50px', borderBottom:'none'} : {paddingBottom : '0px', borderBottom: '2px solid darkslategray'}}>
          <h3 className='title'>Education</h3>
           <form>
               <input type='text' className='input' placeholder='University' onChange={(e) => {handleChange(e, 'university')}} />
               <input type='text' className='input' placeholder='City' onChange={(e) => {handleChange(e, 'city')}} />
               <input type='text' className='input' placeholder='Degree' onChange={(e) => {handleChange(e, 'degree')}} />
               <input type='text' className='input' placeholder='Start' onChange={(e) => {handleChange(e, 'start')}}/>
               <input type='text' className='input' placeholder='End' onChange={(e) => {handleChange(e, 'end')}}/>
           </form>
           {(eduCount > 1) ? <button onClick={(e) => handleDel(e, 'edu')} className='btn'>Remove</button> : ''}
        </div>
    )
}

export default Education
