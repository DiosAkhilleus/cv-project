import './App.css';
import Header from './Components/Header'
import Build from './Components/Build'
import { useState } from 'react'
import { useEffect } from 'react';
import Experience from './Components/Experience';
import General from './Components/General';
import Education from './Components/Education';

function App() {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [name, setName] = useState('');

    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('')

    const [editName, setEditName] = useState(false);
    const [editCont, setEditCont] = useState(false);

    const [expCount, setExpCount] = useState(1);
    const [eduCount, setEduCount] = useState(1);
    const [expArr, setExpArr] = useState([])
    const [eduArr, setEduArr] = useState([]);

    useEffect(() => {
      setEditName(false);
      setEditCont(false);
    }, []);

    // useEffect(() => {
    //   let newArr = [...Array(expCount)].map((el, index) => (
    //               <Experience 
    //                 handleChange={handleChange} 
    //                 handleAdd={handleAdd} 
    //                 handleDel={handleDel} 
    //                 expCount={expCount}
    //                 index={index}
    //               />))

    //   setExpArr(newArr);
    // }, []);


    const handleSubmit = (e, type) => {
        if (type === 'name' && first !== '' && last !== '') {
          setName(`${first} ${last}`);
          setEditName(true);
        };
        if (type === 'cont' && email !== '' && phone !== '') {
          setContact(`${email} | ${phone}`);
          setEditCont(true)
        };
        e.preventDefault();
    }

    const handleChange = (e, info) => {

        if (info === 'first') {setFirst(e.target.value)};
        if (info === 'last')  {setLast(e.target.value)};
        if (info === 'phone') {setPhone(e.target.value)};
        if (info === 'email') {setEmail(e.target.value)};
        console.log(e.target.value);
        
    }

    const handleEdit = (e, info) => {
      if (info === 'name') {setEditName(false)}
      if (info === 'cont') {setEditCont(false)};
    }

    const handleAdd = (e, info) => {
      if (info === 'exp') {
        setExpCount(expCount + 1)
      }
      if (info === 'edu') {setEduCount(eduCount + 1)};
      console.log(expCount, eduCount);
    }

    const handleDel = (e, info, index) => {
      console.log(info, index);
      console.log(expArr);
    }

    // const expEq = () => {
    //   let arr = [];
    //   for (let i = 1; i < expCount; i++) {
    //     arr.push(i);
    //   }
    //   return arr
    // }

    const resetAll = (e) => {
        setFirst('');
        setLast('');
        setPhone('');
        setEmail('');
        setName('');
        setContact('');
        setEditName(false);
        setEditCont(false);
        
    }




  return (
    <div style={{maxHeight:'90vh', maxWidth:'98vw'}}>
      <header className='header' id='top-header' style={{lineHeight:'60px', fontSize:'30px'}}>Resume Builder App</header>
      <div className='page-container'>
        
        <div className='work-container'>
              <General 
                first={first} 
                last={last} 
                phone={phone} 
                email={email} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                handleEdit={handleEdit}  
                editName={editName}
                editCont={editCont}
              />
              {[...Array(expCount)].map((el, index) => (
                  <Experience 
                    handleChange={handleChange} 
                    handleAdd={handleAdd} 
                    handleDel={handleDel} 
                    expCount={expCount}
                    index={index}
                  />))}
              <button onClick={(e) => handleAdd(e, 'exp')} className='btn'>+ Add Experience</button>
              <div className='br'></div>
              {Array(eduCount).fill (
                <Education 
                  handleChange={handleChange}
                  handleAdd={handleAdd} 
                  eduCount={eduCount} 
                  handleDel={handleDel} 
                />
              )}
              <button onClick={(e) => handleAdd(e, 'edu')} className='btn'>+ Add Education</button>
              <button onClick={(e) => resetAll(e)} className='btn' id='reset'>Reset All Fields</button>
        </div>
        <div className='build-container'>
        <Header title='Final Resume' />
          <Build name={name} contact={contact} />
        </div>
      </div>
    </div>
  );
}

export default App;
