import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './components/dashboardApps/Dashboard';
import Counter from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <h1 className='title'>While Learing React</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/counter' element={<Counter/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
