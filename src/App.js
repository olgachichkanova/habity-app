import './App.css';
import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import HabitsList from './components/HabitsList/HabitsList'
import Statistic from './components/Statistics/Statistics';

const testData = require('./data/data')

function App() {
  const [habits, setHabits] = useState(testData.data);
  
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className="logo">Habity</div>
          <nav>
            <Link to="/habits">Habits</Link>
            <Link to="/statistics">Statistics</Link>
          </nav>
        </header>
        <div className="wrapper">
          <Routes>
            <Route exact path="/" element={<Navigate to={"/habits"}/>}/>
            <Route exact path="/habits" element={
              <HabitsList 
                habits={habits} 
                setHabits={setHabits} 
              />
              } />
            <Route path="/statistics" element={<Statistic habits={habits} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
