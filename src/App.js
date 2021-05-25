import './App.css';
import Education from './Components/Education';
import Experience from './Components/Experience';
import General from './Components/General';

function App() {
  return (
    <div>
        <div className='general'>
            <General></General>
        </div>
        <div className='education'>
            <Education></Education>
        </div>
        <div className='experience'>
            <Experience></Experience>
        </div>
    </div>
  );
}

export default App;
