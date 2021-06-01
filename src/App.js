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
    const [editExp, setEditExp] = useState(false);
    const [expArr, setExpArr] = useState([1])
    const [eduArr, setEduArr] = useState([]);

    useEffect(() => {
      setEditName(false);
      setEditCont(false);
    }, []);

    useEffect(() => {
        displayExp()
    }, [expArr]);

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
    const displayExp = () => {
      //console.log('exp');
    }

    const handleSubmit = (e, type, index) => {
        if (type === 'name' && first !== '' && last !== '') {
          setName(`${first} ${last}`);
          setEditName(true);
        };
        if (type === 'cont' && email !== '' && phone !== '') {
          setContact(`${email} | ${phone}`);
          setEditCont(true)
        };
        if (type === 'exp') {
          setEditExp(true);
        }
        e.preventDefault();
    }

    const handleChange = (e, info) => {

        if (info === 'first') {setFirst(e.target.value)};
        if (info === 'last')  {setLast(e.target.value)};
        if (info === 'phone') {setPhone(e.target.value)};
        if (info === 'email') {setEmail(e.target.value)};
        //console.log(e.target.value);
    }

    const handleEdit = (e, info) => {
      if (info === 'name') {setEditName(false)}
      if (info === 'cont') {setEditCont(false)};
      if (info === 'exp')  {setEditExp(false)};
    }

    const handleAdd = (e, info) => {
      if (info === 'exp') {
        setExpCount(expCount + 1);
        setExpArr(expArr.concat([expCount + 1]));
        console.log(expArr.concat([expCount + 1]))
      }
      if (info === 'edu') {setEduCount(eduCount + 1)};
      //console.log(expCount, eduCount);
    }

    const handleDel = (e, info, index) => {
      if (info === 'exp') {
        console.log(info, index);
        setExpCount(expCount - 1);
        setExpArr((expArr.slice(0, index-1).concat(expArr.slice(index))));
      }
      //setExpArr(expArr.splice(index, 0));
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
              {expArr.map((el, index) => (
                  <Experience 
                    handleChange={handleChange} 
                    handleAdd={handleAdd} 
                    handleDel={handleDel} 
                    handleSubmit={handleSubmit}
                    handleEdit={handleEdit}
                    expCount={expCount}
                    editExp={editExp}
                    index={index}
                  />))}
              
              {editExp===true ? <button onClick={(e) => handleAdd(e, 'exp')} className='btn'>+ Add Experience</button> : ''}
              <div className='br'></div>
              <div style={{width:'100%', color:'black'}}>{expArr}</div>


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
