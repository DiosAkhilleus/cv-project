import React from 'react'

function Experience({ handleChange }) {
    return (
        <div>
            <h3 className='title'>Work Experience</h3>
           <form>
               <input type='text' className='input' placeholder='Position Title' onChange={(e) => {handleChange(e, 'position')}} />
               <input type='text' className='input' placeholder='Company' onChange={(e) => {handleChange(e, 'company')}} />
               <input type='text' className='input' placeholder='City' onChange={(e) => {handleChange(e, 'city')}} />
               <input type='text' className='input' placeholder='Start' onChange={(e) => {handleChange(e, 'start')}}/>
               <input type='text' className='input' placeholder='End' onChange={(e) => {handleChange(e, 'end')}}/>
           </form>
        </div>
    )
}

export default Experience
