import './App.css';
import Header from './Components/Header'
import General from './Components/General'
import Education from './Components/Education';
import Experience from './Components/Experience';

function App() {




  return (
    <div className='page-container'>
      <div className='build-container'>
          <Header />
          <General />
      </div>
      <div className='prod-container'>
      </div>
    </div>
  );
}

export default App;
