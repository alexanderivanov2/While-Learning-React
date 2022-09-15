import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './components/dashboardApps/Dashboard';
import Counter from './components/counter/Counter';
import TemperatureControl from './components/temperatureControl/TemperatureControl';

function App() {
  return (
    <div className="App">
      <h1 className='title'>While Learing React</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/temperature-control' element={<TemperatureControl/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
