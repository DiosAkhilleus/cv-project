import React from 'react'

function Experience({ handleChange, handleAdd, handleDel, expCount, index }) {
    // console.log(index);
    return (
        <div className='experience' style={expCount === 1 ? {paddingBottom : '20px', borderBottom:'none'} : {paddingBottom : '0px', borderBottom: '2px solid darkslategray'}}>
          <h3 className='title'>Work Experience {index + 1}</h3>
           <form>
               <input type='text' className='input' placeholder='Position Title' onChange={(e) => {handleChange(e, 'position')}} />
               <input type='text' className='input' placeholder='Company' onChange={(e) => {handleChange(e, 'company')}} />
               <input type='text' className='input' placeholder='City' onChange={(e) => {handleChange(e, 'city')}} />
               <input type='text' className='input' placeholder='Start' onChange={(e) => {handleChange(e, 'start')}}/>
               <input type='text' className='input' placeholder='End' onChange={(e) => {handleChange(e, 'end')}}/>
           </form>
           {(expCount > 1) ? <button onClick={(e) => handleDel(e, 'exp', index)} className='btn'>Remove</button> : ''}
        </div>
    )
}

export default Experience
