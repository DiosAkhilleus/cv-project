import './App.css';
import Header from './Components/Header'
import Build from './Components/Build'
import { useState } from 'react'

function App() {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('')
    const [editName, setEditName] = useState(false);
    const [editCont, setEditCont] = useState(false);

    const handleSubmit = (e, type) => {
        if (type === 'name') {(first !== '' && last !== '') ? (setName(`${first} ${last}`)) : console.log('name incomplete')};
        if (type === 'cont') {(email !== '' && phone !== '') ? (setContact(`${email} | ${phone}`)) : console.log('contact incomplete')};
        type === 'name' ? setEditName(true) : 
        type === 'cont' ? setEditCont(true) :
        e.preventDefault();
    }

    const handleChange = (e, info) => {

        if(info === 'first') {setFirst(e.target.value)};
        if(info === 'last')  {setLast(e.target.value)};
        if(info === 'phone') {setPhone(e.target.value)};
        if(info === 'email') {setEmail(e.target.value)};

        console.log(e.target.value);
        
    }

    const handleEdit = (e, info) => {
      console.log(info);
    }

    const resetAll = (e) => {
        setFirst('');
        setLast('');
        setPhone('');
        setEmail('');
        setName('');
        setContact('');
    }


  return (
    <div className='page-container'>
      <div className='work-container'>
        <Header title='Resume Builder'/>
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



            <button type='submit' onClick={(e) => resetAll(e)} className='btn' id='reset'>Reset All Fields</button>
      </div>
      <div className='build-container'>
      <Header title='Final Resume' />
        <Build name={name} contact={contact} />
      </div>
    </div>
  );
}

export default App;
