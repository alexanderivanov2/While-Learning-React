import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './components/dashboardApps/Dashboard';
import Counter from './components/counter/Counter';
import TemperatureControl from './components/temperatureControl/TemperatureControl';
import CountriesSearchFilter from './components/countriesSearchFilter/CountriesSearchFilter';
import BasicRegistrationForm from './components/basicRegistrationForm/BasicRegistrationForm';
import ReactMovieMiniQuiz from './components/reactMovieMiniQuizApp/ReactMovieMiniQuiz';
import ReactNavbar from './components/reactNavbar/ReactNavbar';
import TodoList from './components/todoList/TodoList';
import Calclucator from './components/calculator/Calculator';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ReactNavbar/>
        <h1 className='title'>While Learing React</h1>

        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/temperature-control' element={<TemperatureControl/>}/>
          <Route path='/countries-search-filter' element={<CountriesSearchFilter/>}/>
          <Route path='/basic-registration-form' element={<BasicRegistrationForm/>}/>
          <Route path='/react-movie-mini-quiz' element={<ReactMovieMiniQuiz/>}/>
          <Route path='/todo-list' element={<TodoList/>}/>
          <Route path='/calclulator' element={<Calclucator/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
